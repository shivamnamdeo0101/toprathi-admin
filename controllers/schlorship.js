const Schlorship = require("../models/Schlorship");
const mongoose = require("mongoose");

exports.addSch = async (req, res, next) => {
    try {

        const data = await Schlorship.create(req.body);

        res.status(201).json({
            success: true,
            data: data,

        });
    } catch (err) {
        next(err);
    }
};




exports.getAllSch = async (req, res, next) => {
    try {

        let list;

        if (req.body.fromWhere === 1) {
            list = await Schlorship.aggregate([
                {
                    $match: {
                        $and: [
                            { $expr: { $in: [req.body.fromWhere, '$fromWhere'] } },
                            { $expr: { $in: [req.body.annualIncome, '$annualIncome'] } },
                            { $expr: { $in: [req.body.caste, '$caste'] } },

                            { $expr: { $in: [req.body.region, '$region'] } },
                            { $expr: { $in: [req.body.educationType, '$educationType'] } },
                            { $expr: { $in: [req.body.gender, '$gender'] } },

                            { $expr: { $in: [req.body.stream, '$stream'] } },
                            { $expr: { $in: [req.body.currClass, '$currClass'] } },
                            { lastClassExamPercent: { $lte: req.body.lastClassExamPercent } }

                        ]
                    }
                },

                { $sort: { 'updateAt': -1 } }


            ])


            
        } else {
            list = await Schlorship.aggregate([
                {
                    $match: {
                        $and: [
                            { $expr: { $in: [req.body.fromWhere, '$fromWhere'] } },
                            { $expr: { $in: [req.body.annualIncome, '$annualIncome'] } },
                            { $expr: { $in: [req.body.caste, '$caste'] } },
                            
                            { $expr: { $in: [req.body.region, '$region'] } },
                            { $expr: { $in: [req.body.educationType, '$educationType'] } },
                            { $expr: { $in: [req.body.gender, '$gender'] } },

                            { $expr: { $in: [req.body.branch, '$branch'] } },
                            { $expr: { $in: [req.body.degreeName, '$degreeName'] } },
                            

                            { $expr: { $in: [req.body.compExam, '$examList'] } },
                            { lastYearCollegePercent: { $lte: req.body.lastYearCollegePercent } },
                            { compExamRank: { $gte: req.body.compExamRank } },

                            { xIIPercent: { $lte: req.body.xIIPercent } },
                            { xPercent: { $lte: req.body.xPercent } }
                            

                        ]
                    }
                },

                { $sort: { 'updateAt': -1 } }


            ])
        }






        res.status(201).json({
            success: true,
            length: list.length,
            data: list


        });
    } catch (err) {
        next(err);
    }
};


exports.getSchById = async (req, res, next) => {
    try {



        let id = mongoose.Types.ObjectId(req.params.schId);

        const list = await Schlorship.aggregate([
            { $match: { _id: id } },

            {
                $lookup:
                {
                    from: "fromwheres",
                    localField: "fromWhere",
                    foreignField: "indexId",
                    as: "fromWhere"
                }
            },
            {
                $lookup:
                {
                    from: "authorities",
                    localField: "authority",
                    foreignField: "indexId",
                    as: "authority"
                }
            },
            {
                $lookup:
                {
                    from: "castes",
                    localField: "caste",
                    foreignField: "indexId",
                    as: "caste"
                }
            },
            {
                $lookup:
                {
                    from: "educationtypes",
                    localField: "educationType",
                    foreignField: "indexId",
                    as: "educationType"
                }
            },
            {
                $lookup:
                {
                    from: "degreenames",
                    localField: "degreeName",
                    foreignField: "indexId",
                    as: "degreeName"
                }
            },

            {
                $lookup:
                {
                    from: "regions",
                    localField: "region",
                    foreignField: "_id",
                    as: "region"
                }
            },


        ])


        res.status(201).json({
            success: true,
            length: list.length,
            data: list


        });
    } catch (err) {
        next(err);
    }
};





exports.getAllSchAdmin = async (req, res, next) => {
    try {

        const list = await Schlorship.find({}).sort({ 'addAt': -1 })

        res.status(201).json({
            success: true,
            length: list.length,
            data: list


        });
    } catch (err) {
        next(err);
    }
};

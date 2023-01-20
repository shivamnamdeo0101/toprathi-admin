const Schlorship = require("../models/Schlorship");

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

        // const list = await Schlorship.find({})

        const list = await Schlorship.aggregate([
            {
                $match: {
                    $and: [
                        { $expr: { $in: [req.body.fromWhere, '$fromWhere'] } },
                        { $expr: { $in: [req.body.caste, '$caste'] } },
                        { $expr: { $in: [req.body.educationType, '$educationType'] } },
                        { $expr: { $in: [req.body.authority, '$authority'] } },
                    ]
                }
            },
           
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

            {$sort:{'updateAt':-1}}


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

        const list = await Schlorship.find({}).sort({'addAt':-1})

        res.status(201).json({
            success: true,
            length: list.length,
            data: list


        });
    } catch (err) {
        next(err);
    }
};
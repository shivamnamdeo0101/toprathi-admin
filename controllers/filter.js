const Authority = require("../models/Authority");
const Branch = require("../models/Branch");
const Caste = require("../models/Caste");
const EducationType = require("../models/EducationType");
const ExamList = require("../models/ExamList");
const FromWhere = require("../models/FromWhere");
const Interest = require("../models/Interest");
const Region = require("../models/Region");
const Schlorship = require("../models/Schlorship");
const Stream = require("../models/Stream");



exports.addFilter = async (req, res, next) => {

    try {
        const type = req.body.type
        let data;
        delete req.body.type

        if(type == "authority"){
            data = await Authority.create(req.body);
        }else if(type === "educationtype"){
            data = await EducationType.create(req.body);
        }else if(type === "fromwhere"){
            data = await FromWhere.create(req.body);
        }else if(type === "caste"){
            data = await Caste.create(req.body);
        }else if(type === "region"){
            data = await Region.create(req.body);
        }else if(type === "interest"){
            data = await Interest.create(req.body);
        }else if(type === "examlist"){
            data = await ExamList.create(req.body);
        }else if(type === "stream"){
            data = await Stream.create(req.body);
        }else if(type === "branch"){
            data = await Branch.create(req.body);
        }

    
        res.status(201).json({
            success: true,
            data: data,

        });
    } catch (err) {
        next(err);
    }
};





exports.getFilter = async (req, res, next) => {

    try {

        const type  = req.params.type;
        let data;
        if(type == "authority"){
            data = await Authority.find({});
        }else if(type === "educationtype"){
            data = await EducationType.find({});
        }else if(type === "fromwhere"){
            data = await FromWhere.find({});
        }else if(type === "caste"){
            data = await Caste.find({});
        }else if(type === "region"){
            data = await Region.find({});
        }else if(type === "interest"){
            data = await Interest.find({});
        }else if(type === "examlist"){
            data = await ExamList.find({});
        }else if(type === "branch"){
            data = await Branch.find({});
        }else if(type === "stream"){
            data = await Stream.find({});
        }
        

    
        res.status(201).json({
            success: true,
            length:data.length,
            data: data,

        });
    } catch (err) {
        next(err);
    }
};
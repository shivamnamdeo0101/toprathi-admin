const Authority = require("../models/Authority");
const Caste = require("../models/Caste");
const EducationType = require("../models/EducationType");
const FromWhere = require("../models/FromWhere");
const Region = require("../models/Region");
const Schlorship = require("../models/Schlorship");


exports.addFilter = async (req, res, next) => {

    try {

        //const data = await Authority.create(req.body);
        //const data = await Caste.create(req.body);
        //const data = await EducationType.create(req.body);
        // const data = await FromWhere.create(req.body);

        const data = await Region.create(req.body);
    
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
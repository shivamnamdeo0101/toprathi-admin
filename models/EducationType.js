const mongoose = require("mongoose");

const EducationTypeRef = new mongoose.Schema({
    timestamp:{
        type: Number,
        default:Date.now()
    },
    name:{
        type: String,
        required: [true, "Please provide value"],
    },
    indexId:{
        type: Number,
        required: [true, "Please provide IndexId"],
        unique: true,
    }
});
const EducationType = mongoose.model("EducationType", EducationTypeRef);

module.exports = EducationType;
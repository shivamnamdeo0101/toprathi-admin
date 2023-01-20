const mongoose = require("mongoose");

const RegionRef = new mongoose.Schema({
    timestamp:{
        type: Number,
        default:Date.now()
    },
    name:{
        type: String,
        required: [true, "Please provide value"],
    },
    value:{
        type: String,
        required: [true, "Please provide value"],
    },
    
});
const Region = mongoose.model("Region", RegionRef);

module.exports = Region;
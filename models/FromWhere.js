const mongoose = require("mongoose");

const FromWhereRef = new mongoose.Schema({
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
        unique: true
    }
});
const FromWhere = mongoose.model("FromWhere", FromWhereRef);

module.exports = FromWhere;


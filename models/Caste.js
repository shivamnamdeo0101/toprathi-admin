const mongoose = require("mongoose");

const CasteRef = new mongoose.Schema({
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
        unique: true,
        required: [true, "Please provide IndexId"],
    }
});
const Caste = mongoose.model("Caste", CasteRef);

module.exports = Caste;
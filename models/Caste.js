const mongoose = require("mongoose");

const CasteRef = new mongoose.Schema({
    timestamp:{
        type: Number,
        default:Date.now()
    },
    value:{
        type: String,
        required: [true, "Please provide value"],
    },
    label:{
        type: String,
        required: [true, "Please provide label"],
    },
    indexId:{
        type: Number,
        unique: true,
        required: [true, "Please provide IndexId"],
    }
});
const Caste = mongoose.model("Caste", CasteRef);

module.exports = Caste;
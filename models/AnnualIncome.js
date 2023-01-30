const mongoose = require("mongoose");

const AnnualIncomeRef = new mongoose.Schema({
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
        required: [true, "Please provide IndexId"],
        unique: true
    }
    
});
const AnnualIncome = mongoose.model("AnnualIncome", AnnualIncomeRef);

module.exports = AnnualIncome;
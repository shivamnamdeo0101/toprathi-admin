const mongoose = require("mongoose");

const AuthorityRef = new mongoose.Schema({
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
const Authority = mongoose.model("Authority", AuthorityRef);

module.exports = Authority;
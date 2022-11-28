const mongoose = require("mongoose");


const CollectionRefSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId
    },
  
});

const CollectionRef = mongoose.model("CollectionRef", CollectionRefSchema);

module.exports = CollectionRef;
const mongoose = require("mongoose");


const NewsSchema = new mongoose.Schema({
    author: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },

    form_link:{
        type:String
    },
    image:{
        type:String
    },
    views: {
        type: Number,
        default: 0
    },
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        comment: String
    }],
    timestamp: {
        type: Number,
        required: true,
    },
    tags:[ {
        value: {
            type: String,
            
        },
        label: {
            type: String,
            
        }
        
    }],
    addedAt: {
        type: Number,
    },
    updatedAt: {
        type: Number,
        default: Date.now()
    }

});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
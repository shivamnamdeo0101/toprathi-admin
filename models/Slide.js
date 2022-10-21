const mongoose = require("mongoose");


const SlideSchema = new mongoose.Schema({
    author: {
        type: String
    },
    title: {
        type: String
    },
    image:{
        type:String
    },
    content: {
        type: String
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
            type: String,
        }
    ],
    addedAt: {
        type: Number,
    },
    updatedAt: {
        type: Number,
        default: Date.now()
    }

});

const Slide = mongoose.model("Slide", SlideSchema);

module.exports = Slide;
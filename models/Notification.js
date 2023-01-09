const mongoose = require("mongoose");


const NotificationRefSchema = new mongoose.Schema({

    timestamp:{
        type: Number,
        default:Date.now()
    },
    text:{
        type: String,
    },
    image:{
        type:String,
    }

    
});

const Notification = mongoose.model("Notification", NotificationRefSchema);

module.exports = Notification;
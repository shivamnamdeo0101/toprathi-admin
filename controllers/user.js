const User = require("../models/User");

var FCM = require('fcm-node');
var serverKey = 'AAAAYYjDA20:APA91bE3a67rglDk8tMgGGmc2ZV2B5YFBP20YuaTCqKBcp19lH8iili_JXWQxCy38euf_uAqPRTKSmOLWH5JyEOT08Fq3Sg0pAB7cKsZCf-yMosis6A8y6s4nS60mSS7qe0TWfDZhgD5'; //put your server key here
var fcm = new FCM(serverKey);


const { setCache, getCache } = require("../middleware/redisCache");
const { sendPushNotification } = require("../utils/sendPushNotification");
const News = require("../models/News");


exports.updateUser = async (req, res, next) => {
  const { user_data } = req.body;


  console.log(user_data)

  try {
    // const user = await User.findByIdAndUpdate(req.params.userId, {
    //   email: user_data.email,
    //   username: user_data.username,
    //   education: user_data.education
    // });

    const user = await User.findById(req.params.userId)
    user.education = user_data.education,
      user.interest = user_data.interest,
      user.post_collections = user_data.post_collections
    user.save()
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};


exports.getUserById = async (req, res, next) => {

  try {

    // let user = await getCache("user.id=",req.params.userId);

    // if(user){

    //   return res.status(200).json({
    //     success: true, data: user, msg: "Success",id:req.params.userId
    //   });
    // }

    let user = await User.findById(req.params.userId);

    //setCache("users.id=",req.params.userId,user)
    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "User not found.",
      });
    }

    res
      .status(200)
      .json({ success: true, data: user, msg: "Success" });

  } catch (err) {
    next(err);
  }
};




exports.saveCollectionToUser = async (req, res, next) => {

  try {

   
    const user = await User.findById(req.body.userId)
    const post = await News.findById(req.body.postId)

    if (!user || !post) {
      return res.status(401).json({
        success: false,
        msg: "Not found.",
      });
    }


    user.post_collections.push({"postId":req.body.postId})
    user.save()

    //setCache("users.id=",req.params.userId,user)
    res
      .status(200)
      .json({ success: true, data: user, msg: "Success" });

  } catch (err) {
    next(err);
  }
};

exports.remCollectionToUser = async (req, res, next) => {

  try {

    const user = await User.findById(req.body.userId)

    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "Not found.",
      });
    }
    
    user.post_collections.splice(user.post_collections.findIndex(e => e.postId === req.body.postId),1);
    user.save()

    //setCache("users.id=",req.params.userId,user)
    res
      .status(200)
      .json({ success: true, data: user, msg: "Success" });

  } catch (err) {
    next(err);
  }
};


exports.getCollectionToUser = async (req, res, next) => {

  try {

    const user = await User.findById(req.params.userId)

    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "Not found.",
      });
    }

    const check = obj => obj.postId === req.params.postId;

    const result = user.post_collections.some(check)
        
    res.status(200)
      .json({ success: true, data: result, msg: "Success"});

  } catch (err) {
    next(err);
  }
};


exports.getProfileCollection = async (req, res, next) => {

  try {

    const user = await User.findById(req.params.userId)

    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "User Not found.",
      });
    }
        
    res.status(200)
      .json({ success: true, data: user.post_collections, msg: "Success"});

  } catch (err) {
    next(err);
  }
};

exports.updateProfileImg = async (req, res, next) => {

  try {

    const user = await User.findById(req.body.userId)

    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "User Not found.",
      });
    }

    user.profile_img = req.body.profile_img
    user.save();
    res.status(200)
      .json({ success: true, data: user, msg: "Success"});

  } catch (err) {
    next(err);
  }
};

exports.getProfileImg = async (req, res, next) => {

  try {

    const user = await User.findById(req.params.userId)

    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "User Not found.",
      });
    }


    res.status(200)
      .json({ success: true, data: user.profile_img, msg: "Success"});

  } catch (err) {
    next(err);
  }
};




exports.notify = async (req, res, next) => {

  try {
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      to: 'faBEtqH9QgOe1Y0pFVLCPW:APA91bEj9CQ5k3S71izxKhe-fnQ4lhXVzLQuKmaMJGA4H9sBh-cgvq2QCVF8JLwa0HyOTx49uUWoHRKjxZjImv9D2vk6BiAiwsVAad89fgcoz97XKl9SSF5s5T63UiHAeeKUpjJoVv-C',
      collapse_key: 'com.toprathi',

      notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification',
        android:{
          imageUrl: 'https://www.pixel4k.com/wp-content/uploads/2020/01/photographer-girl-painting_1578254993.jpg'
        }
        
      },

      data: {  //you can send only notification or only data(or include both)
        my_key: 'my value',
        my_another_key: 'my another value'
      }
    };

    fcm.send(message, function (err, response) {
      if (response) {
        res
        .status(200)
        .json({ success: true, data: response, msg: "Success" });
      } else {
        res
        .status(400)
        .json({ success: false, data: err, msg: "Failure" });
      }
    });


  } catch (err) {
    next(err);
  }
};







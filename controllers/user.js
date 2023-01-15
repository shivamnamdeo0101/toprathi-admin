const User = require("../models/User");
const mongoose = require("mongoose");

var FCM = require('fcm-node');
var serverKey = 'AAAAYYjDA20:APA91bE3a67rglDk8tMgGGmc2ZV2B5YFBP20YuaTCqKBcp19lH8iili_JXWQxCy38euf_uAqPRTKSmOLWH5JyEOT08Fq3Sg0pAB7cKsZCf-yMosis6A8y6s4nS60mSS7qe0TWfDZhgD5'; //put your server key here
var fcm = new FCM(serverKey);


const { setCache, getCache } = require("../middleware/redisCache");
const { sendPushNotification } = require("../utils/sendPushNotification");
const News = require("../models/News");


exports.updateUser = async (req, res, next) => {
  const { user_data } = req.body;

  try {
    // const user = await User.findByIdAndUpdate(req.params.userId, {
    //   email: user_data.email,
    //   username: user_data.username,
    //   education: user_data.education
    // });


    const user = await User.findById(req.params.userId)
    user.education = user_data.education,
      user.interest = user_data.interest,
      user.address = user_data.address,
      //user.post_collections = user_data.post_collections,
      user.isProfileDone = user_data.isProfileDone


    user.save()
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};



exports.getUserNotifications = async (req, res, next) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.userId);

    const list = await User.aggregate([
      { $match: { _id: id } },
      {$unwind : "$notifications"},
      {
        $lookup: {
          from: "notifications",
          localField: "notifications.notifyId",
          foreignField: "_id",
          as: "notifications_"
        }
      },
      { $unwind: { path: "$notifications_" } },
      { $unwind: { path: "$notifications" } },
      { $project: { _id: 0, notifyId: '$notifications_._id', timestamp: '$notifications_.timestamp', text: '$notifications_.text', image: '$notifications_.image', readStatus: '$notifications.readStatus' } },
      { $sort: { timestamp: -1 } }

    ])
    res.status(200).json({
      success: true,
      length: list.length,
      data: list,
    });
  } catch (err) {
    next(err);
  }
};



exports.setUserSuccessRegister = async (req, res, next) => {
  const { isSuccess, userId } = req.body;

  try {

    const user = await User.findById(userId)
    user.isSuccess = isSuccess;
    user.save()
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};


exports.updateNotifyToken = async (req, res, next) => {

  try {

    const user = await User.findById(req.body.userId)
    user.notifyToken = req.body.notifyToken

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

    const newsPayload = {
      "newsId": req.body.postId,

    }


    if (!user || !post) {
      return res.status(401).json({
        success: false,
        msg: "Not found.",
      });
    }

    user.post_collections.push({ "newsId": req.body.postId, addAt: Date.now() })
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

    user.post_collections.splice(user.post_collections.findIndex(e => e.postId === req.body.postId), 1);
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
    let id = mongoose.Types.ObjectId(req.params.userId);

    const list = await User.findById(req.params.userId,{'post_collections':{$elemMatch:{'newsId' :req.params.postId}}})

    console.log("userId",req.params.userId,"postId",req.params.postId,"List",list)

    if(list.post_collections.length === 0){
      res.status(200)
      .json({ success: true, data: false, msg: "Success" });
    }else{
      res.status(200)
      .json({ success: true, data: true, msg: "Success" });
    }

   

   

  } catch (err) {
    next(err);
  }
};


exports.getProfileCollection = async (req, res, next) => {

  let id = mongoose.Types.ObjectId(req.params.userId);
  const size = 8 ; const pageNo = req.params.pageNo;
  const skip = size * (pageNo -1);

  try {

    const list = await User.aggregate([
      { $match: { _id: id } },
      {$unwind:  '$post_collections'},
     
      {
        $lookup: {
          from: "news",
          localField: "post_collections.newsId",
          foreignField: "_id",
          as: "news_"
        }

      },

      { $unwind: { path: '$news_'}},
     { $project: { _id: 0, newsId: '$news_._id', timestamp: '$news_.timestamp', title: '$news_.title', tags: '$news_.tags', content: '$news_.content', news_type: '$news_.news_type', image: '$news_.image', addAt: '$post_collections.addAt'  } },
      { $sort: { addAt: -1 } },
     
      {$skip: skip },
      {$limit: size } 
    
    
    ])


    

    if (!list) {
      return res.status(401).json({
        success: false,
        msg: "User Not found.",
      });
    }

    res.status(200)
      .json({ length : list.length,success: true, data: list, msg: "Success" });

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
      .json({ success: true, data: user, msg: "Success" });

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
      .json({ success: true, data: user.profile_img, msg: "Success" });

  } catch (err) {
    next(err);
  }
};




exports.notify = async (req, res, next) => {

  try {
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      to: 'dke7iUq0Q6yLIk6IunC8Bg:APA91bGBry19O1Mt1Y2T-wD6q4kq_q2M9pM9x5KorYnMZ98SJJFoEUtbcuicQZAHC-Pj1q3siXc9XCR3czA0vfRPD_A6O7YEdR9_U3Z2DHtsKWBXnSgb6WzfVkYNq-YeEs6y_jfdfWvK',
      collapse_key: 'com.toprathi',

      notification: {
        title: req.body.title,
        body: req.body.body,
        android: {
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







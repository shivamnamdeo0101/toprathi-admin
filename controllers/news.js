const News = require("../models/News");
const Slide = require("../models/Slide");
const { setCache, getCache, clearCache } = require("../middleware/redisCache")
const User = require("../models/User")
const Notification = require("../models/Notification");
const { findOne } = require("../models/News");
const { sendPushNotification } = require("../utils/sendPushNotification");

// @desc    ADd news
exports.addNews = async (req, res, next) => {
  const { title, content, image, timestamp, author, views, tags, addAt, updatedAt, read_more_link, form_link, news_type, poll_title, poll_user_responses, insight_arr } = req.body;

  try {

    let news_key = "news" + 1 + "" + 5;
    await clearCache("news_array.id=" + news_key)


    const news = await News.create({
      title, content, image, timestamp, author, views, tags, addAt, updatedAt, read_more_link, form_link, news_type, poll_title, poll_user_responses, insight_arr
    });

    const notification = await Notification.create({"text":news.title,timestamp:Date.now(),image:news.image})

    const notifyPayload = {
      notifyId: notification._id,
      refId:news._id,
      readStatus:false
    } 

    await User.updateMany({ $or: [{ "interest.name": "math" }, { "interest.name": "science" }] }, { $push: { notifications: notifyPayload } }, { $new: true });
    await sendPushNotification(news)


    res.status(201).json({
      success: true,
      data: notification,

    });
  } catch (err) {
    next(err);
  }
};
exports.addSlide = async (req, res, next) => {

  try {

    // const news = await News.create(req.body)

    // const newsPayload = {
    //   newsId: news._id,
    // }


    // 
    //   await User.updateMany({ $or: [{ "interest.name": "math" }, { "interest.name": "history" }] }, { $push: { post_collections: newsPayload } }, { $new: true });

    //  const users = await User.find({"email":"shivamnamdeo0101@gmail.com"}).select("notifications").populate({
    //   path: 'notificationrefs',
    //   // Get friends of friends - populate the 'friends' array for every friend
    // });

    // const users = await User.find({ "email": "shivamnamdeo0101@gmail.com" }).populate({ path: 'notifications', select: 'notifications' });


    // const users = await User.findOne({ "email": "shivamnamdeo0101@gmail.com" }).populate({
    //   path: 'notifications',
    //   model: 'Notification'
    // }).exec(function (err, user) {
    //   if (err) return handleError(err);
    //   console.log('Here is the populated user: ', user.notifications);
    // });
    //  var pageNo = 1;
    //  var size = 5;

    // var skip = size * (pageNo - 1);


    //  const users = await User.find({"email":"shivamnamdeo0101@gmail.com"}).select("post_collections")
    //                 .populate({ path: 'notificationrefs', select: ['_id', 'text','image','timestamp'] })
    //                 .skip(skip)
    //                 .limit(size)




    let users = await User.aggregate([
      { $match: { email: "shivamnamdeo01@gmail.com" } },
      {
        $lookup: {
          from: "news",
          localField: "post_collections.newsId",
          foreignField: "_id",
          as: "news"
        }

      },
     
      { $unwind: { path: "$news" } },
      { $project: {_id:0, newsId: '$news._id',timestamp: '$news.title',image: '$news.image',addAt: { $first: "$post_collections.addAt" }, }},
     { $sort: { timestamp: 1 } }

    ])




    res.status(201).json({
      success: true,
      length: users.length,
      data: users,

    });
  } catch (err) {
    next(err);
  }
};



exports.searchTitle = async (req, res, next) => {

  const limit = 100;
  let query = req.params.query;
  let search = await News.find({ "title": { $regex: new RegExp(query, "i") } }).select(['_id','title','timestamp']) .sort([['title',1],['timestamp',-1]]).limit(Number(limit))

  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    query: query,
    count: search.length,
    data: search,

  });
}

exports.searchNews = async (req, res, next) => {

  const pageNo = req.params.pageNo;
  const size = 8; 
  const skip = size * (pageNo - 1);
  const limit = size;
  let query = req.params.query;
  //let total = await News.find({ "title": { $regex: new RegExp(query, "i") } }).countDocuments()
  let search = await News.find({ "title": { $regex: new RegExp(query, "i") } }).select(['_id','timestamp','image','tags','title','content']) .sort([['title',1],['timestamp',-1]]).limit(Number(limit))
  .skip(Number(skip));

  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    query: query,
    pageNo:pageNo,
    count: search.length,
    data: search,

  });
}

exports.getSlide = async (req, res, next) => {

  let slide = await News.find({ news_type: { $regex: 'slide' } });

  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    count: slide.length,
    data: slide,
  });
};

exports.getInsight = async (req, res, next) => {
  let insight = await News.find({ news_type: { $regex: 'insight' } });
  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    count: insight.length,
    data: insight,
  });
};



exports.editNews = async (req, res, next) => {
  let news_key = "news" + 1 + "" + 5;
  await clearCache("news_array.id=" + news_key)

  let news = await News.findById(req.params.newsId);

  if (!news) {
    return res.status(401).json({
      success: false,
      msg: "News not found.",
    });
  }

  news = await News.findByIdAndUpdate(req.params.newsId, req.body, {
    new: true,
    runValidators: true,
  });

  res
    .status(200)
    .json({ success: true, data: news, msg: "Successfully updated" });
};


exports.getNewsById = async (req, res, next) => {


  let news = await News.findById(req.params.newsId);

  if (!news) {
    return res.status(401).json({
      success: false,
      msg: "News not found.",
    });
  }

  res
    .status(200)
    .json({ success: true, data: news, msg: "Success" });
};



exports.getSlideById = async (req, res, next) => {

  let news = await News.findById(req.params.newsId);

  if (!news) {
    return res.status(401).json({
      success: false,
      msg: "News not found.",
    });
  }

  res
    .status(200)
    .json({ success: true, data: news, msg: "Success" });
};



exports.remNewsById = async (req, res, next) => {

  let news_key = "news" + 1 + "" + 5;
  await clearCache("news_array.id=" + news_key)
  await clearCache("news_array.id=" + "total_news")
  const news = await News.findByIdAndDelete(req.params.newsId);
  if (!news) {
    return res.status(401).json({
      success: false,
      msg: 'News not found.'
    })
  }
  res.status(201).json({
    success: true,
    msg: 'Successfully Deleted',
    data: news
  })


};


exports.getNews = async (req, res, next) => {

  var size = req.params.perPage;
  var pageNo = req.params.page; // parseInt(req.query.pageNo)

  let news_key = "news" + pageNo + "" + size;
  let news = await getCache("news_array.id=", news_key)
  let total_news_count = await getCache("news_array.id=", "total_news")

  if (news) {
    return res.json({
      success: true,
      count: total_news_count,
      data: news,
    });
  }

  var query = {};
  if (pageNo < 0 || pageNo === 0) {
    response = {
      success: false,
      message: "invalid page number, should start with 1",
    };
    return res.json(response);
  }

  // total_news = await News.find({});

  query.skip = size * (pageNo - 1);
  query.limit = size;

  let result = await News.find({ news_type: { $in: ['feed','insight','slide'] } })
    // .select(["_id","image","timestamp","tags","title","content"])
    .sort({ 'timestamp': 'desc' })
    .populate({ path: "addAt", select: ["_id"] })
    .sort("-_id")
    .limit(Number(query.limit))
    .skip(Number(query.skip));

  
  // setCache("news_array.id=", news_key, result)
  // setCache("news_array.id=", "total_news", total_news.length)
  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    count: result.length,
    limit: Number(query.limit),
    data: result,
  });
};

exports.getNewsAdmin = async (req, res, next) => {


  var pageNo = req.params.page; // parseInt(req.query.pageNo)
  var size = req.params.perPage;

  let news_key = "news" + pageNo + "" + size;
  let news = await getCache("news_array.id=", news_key)
  let total_news_count = await getCache("news_array.id=", "total_news")

  if (news) {
    return res.json({
      success: true,
      count: total_news_count,
      data: news,
    });
  }



  var query = {};
  if (pageNo < 0 || pageNo === 0) {
    response = {
      success: false,
      message: "invalid page number, should start with 1",
    };
    return res.json(response);
  }

  total_news = await News.find({});

  query.skip = size * (pageNo - 1);
  query.limit = size;

  let result = await News.find({})
    .sort({ 'timestamp': 'desc' })
    .populate({ path: "addAt", select: ["_id"] })
    .sort("-_id")
    .limit(Number(query.limit))
    .skip(Number(query.skip));



  setCache("news_array.id=", news_key, result)
  setCache("news_array.id=", "total_news", total_news.length)
  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    count: total_news.length,
    limit: Number(query.limit),
    data: result,
  });
};




exports.addPoll = async (req, res, next) => {

  try {

    const post = await News.findById(req.body.postId)

    if (!post) {
      return res.status(401).json({
        success: false,
        msg: "Post Not found.",
      });
    }

    await post.poll_user_responses.push({ "userId": req.body.userId, "msg": req.body.msg })
    await post.save()

    //setCache("users.id=",req.params.userId,user)
    res
      .status(200)
      .json({ success: true, data: post.poll_user_responses, msg: "Success" });

  } catch (err) {
    next(err);
  }
};

exports.getPoll = async (req, res, next) => {

  try {

    const post = await News.findById(req.params.postId)

    if (!post) {
      return res.status(401).json({
        success: false,
        msg: "Post Not found.",
      });
    }


    //setCache("users.id=",req.params.userId,user)
    res
      .status(200)
      .json({ success: true, data: post.poll_user_responses, msg: "Success" });

  } catch (err) {
    next(err);
  }
};


exports.remPoll = async (req, res, next) => {

  try {

    const post = await News.findById(req.body.postId)

    if (!post) {
      return res.status(401).json({
        success: false,
        msg: "Post Not found.",
      });
    }

    post.poll_user_responses.splice(post.poll_user_responses.findIndex(e => e.userId === req.body.userId), 1);
    post.save()

    //setCache("users.id=",req.params.userId,user)
    res
      .status(200)
      .json({ success: true, data: post.poll_user_responses, msg: "Success" });

  } catch (err) {
    next(err);
  }
};
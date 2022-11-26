const News = require("../models/News");
const Slide = require("../models/Slide");
const {setCache,getCache,clearCache } = require("../middleware/redisCache")


// @desc    ADd news
exports.addNews = async (req, res, next) => {
  const { title, content, image, timestamp, author, views, tags, addAt, updatedAt ,read_more_link,form_link,news_type,poll_title,poll_user_responses} = req.body;

  try {

    let news_key = "news"+1+""+5;
    await clearCache("news_array.id="+news_key)


    const news = await News.create({
      title, content, image, timestamp, author, views, tags, addAt, updatedAt,read_more_link,form_link,news_type,poll_title,poll_user_responses
    });
    res.status(201).json({
      success: true,
      data: news,

    });
  } catch (err) {
    next(err);
  }
};
exports.addSlide = async (req, res, next) => {
  const { title, content, image, timestamp, author, views, tags, addAt, updatedAt } = req.body;

  try {


    const slide = await Slide.create({
      title, content, image, timestamp, author, views, tags, addAt, updatedAt,
    });
    
    res.status(201).json({
      success: true,
      data: slide,

    });
  } catch (err) {
    next(err);
  }
};


exports.searchNews = async (req, res, next) => {
  let query  = req.params.q;
  let search = await News.find({ title: { $regex: query } });

  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    query:query,
    count: search.length,
    data: search,
   
  });
};

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

  let news_key = "news"+1+""+5;
  await clearCache("news_array.id="+news_key)
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

  let news_key = "news"+1+""+5;
  await clearCache("news_array.id="+news_key)
  await clearCache("news_array.id="+"total_news")
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

  let news_key = "news"+pageNo+""+size;
  let news = await getCache("news_array.id=",news_key)
  let total_news_count = await getCache("news_array.id=","total_news")

  if(news){
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

  setCache("news_array.id=",news_key,result)
  setCache("news_array.id=","total_news",total_news.length)
  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    count: total_news.length,
    limit: Number(query.limit),
    data: result,
  });
};
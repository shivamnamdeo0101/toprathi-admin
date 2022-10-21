const News = require("../models/News");
const Slide = require("../models/Slide");


// @desc    ADd news
exports.addNews = async (req, res, next) => {
  const { title, content, image, timestamp, author, views, tags, addAt, updatedAt } = req.body;

  try {
    const news = await News.create({
      title, content, image, timestamp, author, views, tags, addAt, updatedAt,
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


exports.getSlide = async (req, res, next) => {

  let slide = await Slide.find({});

  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    count: slide.length,
    data: slide,
  });
};

exports.editNews = async (req, res, next) => {

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


exports.remNewsById = async (req, res, next) => {

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

  console.log("page number : " + req.params.page);
  console.log("per page : " + req.params.perPage);
  var size = req.params.perPage;
  var pageNo = req.params.page; // parseInt(req.query.pageNo)

  var query = {};
  if (pageNo < 0 || pageNo === 0) {
    response = {
      success: false,
      message: "invalid page number, should start with 1",
    };
    return res.json(response);
  }

  query.skip = size * (pageNo - 1);
  query.limit = size;

  let news = await News.find({});

  let result = await News.find({})
    .sort({ 'timestamp': 'desc' })
    .populate({ path: "addAt", select: ["_id"] })
    .sort("-_id")
    .limit(Number(query.limit))
    .skip(Number(query.skip));

  // const news = await News.find({}, query).populate({ path: 'category', select: ['_id', 'category_name'] }).populate({ path: 'addedBy', select: ['name', 'email']})
  res.json({
    success: true,
    count: news.length,
    limit: Number(query.limit),
    data: result,
  });
};
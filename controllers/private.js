const News = require("../models/News");
exports.getPrivateRoute = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: "You got access to the private data in this route",
    });
};

// @desc    ADd news
exports.addNews = async (req, res, next) => {
  const { title, content, timestamp ,author,views  ,tags,addAt,updatedAt} = req.body;

  try {
    const news = await News.create({
      title, content, timestamp ,author,views,tags,addAt,updatedAt,
    });
    res.status(201).json({
      success: true,
      data: news,
     
    });
  } catch (err) {
    next(err);
  } 
};
const News = require("../models/News");
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
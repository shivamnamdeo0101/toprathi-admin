const express = require("express");
const router = express.Router();
const { getPrivateRoute} = require("../controllers/private");
const { addNews,getNews,addSlide,getSlide,editNews,getNewsById,remNewsById,getSlideById} = require("../controllers/news");

const {getNewsCache} = require("../middleware/redisCache");

const {updateUser,getUserById} = require("../controllers/user")
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getPrivateRoute);
router.route("/news").post(protect,addNews);
router.route("/news/:newsId").get(protect,getNewsById);


router.route("/news/:newsId").delete(protect,remNewsById);
router.route("/news/:newsId").put(protect,editNews);
router.route("/news/:page/:perPage").get(getNews);


router.route("/slide").post(addSlide);
router.route("/slide").get(getSlide);


router.route("/slide/:page/:perPage").get(getNewsCache);



router.route("/user/:userId").put(updateUser);
router.route("/user/:userId").get(protect,getUserById);


module.exports = router;

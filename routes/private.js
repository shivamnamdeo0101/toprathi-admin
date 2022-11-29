const express = require("express");
const router = express.Router();
const { getPrivateRoute} = require("../controllers/private");
const { addNews,getNews,addSlide,getSlide,editNews,getNewsById,remNewsById,getSlideById, getInsight, searchNews, getNewsAdmin, addPoll, getPoll, remPoll} = require("../controllers/news");

const {getNewsCache} = require("../middleware/redisCache");

const {updateUser,getUserById, saveCollectionToUser, notify, remCollectionToUser, getCollectionToUser, getProfileCollection, updateProfileImg, getProfileImg} = require("../controllers/user")
const { protect } = require("../middleware/auth");
const { sendPushNotification } = require("../utils/sendPushNotification");

router.route("/").get(protect, getPrivateRoute);
router.route("/news").post(protect,addNews);


router.route("/news/:newsId").get(protect,getNewsById);





router.route("/news/:newsId").delete(protect,remNewsById);
router.route("/news/:newsId").put(protect,editNews);
router.route("/news/:page/:perPage").get(getNews);
router.route("/news-admin/:page/:perPage").get(getNewsAdmin);





router.route("/slide").post(addSlide);
router.route("/slide").get(getSlide);


router.route("/insight").get(getInsight);



router.route("/search/:query").get(searchNews);


router.route("/collection").post(saveCollectionToUser);

router.route("/collection").delete(remCollectionToUser);
router.route("/collection/:userId/:postId").get(getCollectionToUser);

router.route("/collection/:userId").get(getProfileCollection);




router.route("/poll").post(addPoll);
router.route("/poll/:postId").get(getPoll);
router.route("/poll").delete(remPoll);






router.route("/notify").post(notify);




router.route("/user/:userId").put(updateUser);
router.route("/user/:userId").get(protect,getUserById);
router.route("/profile-img").put(updateProfileImg);
router.route("/profile-img/:userId").get(getProfileImg);




module.exports = router;

const express = require("express");
const router = express.Router();
const { getPrivateRoute} = require("../controllers/private");
const { addNews,getNews,addSlide,getSlide,editNews,getNewsById,remNewsById,getSlideById, getInsight, searchNews, getNewsAdmin, addPoll, getPoll, remPoll, searchTitle} = require("../controllers/news");

const {getNewsCache} = require("../middleware/redisCache");

const {updateUser,getUserById, saveCollectionToUser, notify, remCollectionToUser, getCollectionToUser, getProfileCollection, updateProfileImg, getProfileImg, updateNotifyToken, setUserSuccessRegister, getUserNotifications, setReadNotifyTrue} = require("../controllers/user")
const { protect } = require("../middleware/auth");
const { sendPushNotification } = require("../utils/sendPushNotification");
const { addFilter, getFilter } = require("../controllers/filter");
const { addSch, getAllSch, getAllSchAdmin, getSchById } = require("../controllers/schlorship");




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


router.route("/search/:query/:pageNo").get(searchNews);
router.route("/search-title/:query").get(searchTitle);



router.route("/collection").post(saveCollectionToUser);

router.route("/collection").delete(remCollectionToUser);

router.route("/collection/:userId/:postId").get(getCollectionToUser);

router.route("/profile-collection/:userId/:pageNo").get(getProfileCollection);


router.route("/poll").post(addPoll);
router.route("/poll/:postId").get(getPoll);
router.route("/poll").delete(remPoll);


router.route("/notify-token-update").put(updateNotifyToken);
router.route("/notify").post(notify);

router.route("/success/:userId").put(setUserSuccessRegister);
router.route("/notification").post(setReadNotifyTrue);




router.route("/user/:userId").put(updateUser);
router.route("/user/:userId").get(protect,getUserById);
router.route("/profile-img").put(updateProfileImg);
router.route("/profile-img/:userId").get(getProfileImg);
router.route("/user-notifications/:userId/:pageNo").get(protect,getUserNotifications);


// Filters

router.route("/filter-add").post(addFilter)
router.route("/filter-get/:type").get(getFilter)


getFilter

//Schlorship

router.route("/sch-add").post(addSch)
router.route("/sch-getall").post(getAllSch)
router.route("/sch/:schId").get(getSchById)



//Admin

router.route("/admin-sch-getall").get(getAllSchAdmin)







module.exports = router;


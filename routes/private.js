const express = require("express");
const router = express.Router();
const { getPrivateRoute} = require("../controllers/private");
const { addNews} = require("../controllers/news");
const {updateUser} = require("../controllers/user")
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getPrivateRoute);
router.route("/news").post(protect,addNews);
router.route("/user").put(updateUser);

module.exports = router;

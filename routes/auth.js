const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
  sendEmailVerification,
  emailVerify,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

router.route("/send-emailverification").post(sendEmailVerification);

router.route("/email-verify/:emailToken").put(emailVerify);




module.exports = router;

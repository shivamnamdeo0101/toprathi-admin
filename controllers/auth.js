const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// @desc    Login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    if(!user.emailVerified){
      return next(new ErrorResponse("Verify your email to login", 401));
    }

    sendToken(user, 200, res);


    
  } catch (err) {
    next(err);
  }
};

// @desc    Register user
exports.register = async (req, res, next) => {
  const { username, email, password , education,interest
  } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
      education,
      interest
    });

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc    Forgot Password Initialization
exports.forgotPassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();
    
    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>OTP for password reset: ${resetUrl}</p>
    `;
    // const message = `
    //   <h1>You have requested a password reset</h1>
    //   <p>OTP for password reset:</p>
    //   <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    // `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Reset User Password
exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  // res.cookie(String(user._id), token, {
  //   path: "/",
  //   expires: new Date(Date.now() + 1000 * 30), //30 seconds
  //   httpOnly: true,
  //   sameSite: "lax",
  // });

  const data = {user,token}

  res.status(statusCode).json({ sucess: true, data:data });
};


// @desc    Forgot Password Initialization
exports.sendEmailVerification = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const emailToken = user.getEmailVerifyToken();
    
    await user.save();

    // Create reset url to email to provided email
    const emailUrl = `http://localhost:3000/email-verify/${emailToken}`;
    // HTML Message
    const message = `
      <h1>You have requested a email verification</h1>
      <p>Click here to verify your email: ${emailUrl}</p>
    `;
    // const message = `
    //   <h1>You have requested a password reset</h1>
    //   <p>OTP for password reset:</p>
    //   <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    // `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Email Verification Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      console.log(err);

      user.emailVerifyToken = undefined;
      user.emailVerifyExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Reset User Password
exports.emailVerify = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const emailVerifyToken = crypto
    .createHash("sha256")
    .update(req.params.emailToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      emailVerifyToken,
      emailVerifyExpire: { $gt: Date.now() },
    });

   
    if (!user) {
      return next(new ErrorResponse("Invalid Token ... resend the link to verify", 400));
    }

    if(user && user.emailVerified){
      return  res.status(201).json({
        success: true,
        data: "Email Verified Already",
        emailVerify: user.emailVerify,
      });
    }

    user.emailVerified = true;
    user.emailVerifyToken = undefined;
    user.emailVerifyExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Email Verified Successfully",
      emailVerify: user.emailVerify,
    });
  } catch (err) {
    next(err);
  }
};

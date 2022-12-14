const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { type } = require("os");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  interest: [{
    name: {
      type: String,
    }
  }],
  profile_img: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
  },


  post_collections: [{
    newsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'News'
    },
    addAt:{
      type:Number,
      default:Date.now()
    }
  }],
  notifications: [{
    notifyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification'
    },
    readStatus: {
        type: Boolean,
        default: false
      }
    }

  ],


  education: {
    type: mongoose.SchemaTypes.Mixed,
  },
  address: {
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: Number,
    }
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  notifyToken: {
    type: String,
    default: ""
  },



  isSuccess: {
    type: Boolean,
    default: false
  },

  isProfileDone: {
    type: Boolean,
    default: false
  },

  joinedOn: {
    type: String,
    default: Date.now()
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  emailVerifyToken: String,
  emailVerifyExpire: Date
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};


UserSchema.methods.getEmailVerifyToken = function () {
  const emailToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.emailVerifyToken = crypto
    .createHash("sha256")
    .update(emailToken)
    .digest("hex");

  // Set token expire date
  this.emailVerifyExpire = Date.now() + 1 * (60 * 1000); // 1 Min

  return emailToken;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

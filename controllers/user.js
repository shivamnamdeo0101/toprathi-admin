const User = require("../models/User");

exports.updateUser = async (req, res, next) => {
  const {user_id, user_data } = req.body;

  try {
    const user = await User.findByIdAndUpdate(req.params.userId,{
      email:user_data.email,
      education:user_data.education
    });

    //const user = await User.findById(user_id);
    user.name = user_data.name;
    user.education = user_data.education;
    user.save()
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  } 
};


exports.getUserById = async (req, res, next) => {

  try {
  let user = await User.findById(req.params.userId);

  if (!user) {
    return res.status(401).json({
      success: false,
      msg: "User not found.",
    });
  }

  res
    .status(200)
    .json({ success: true, data: user, msg: "Success" });

  }catch (err) {
    next(err);
  } 
};






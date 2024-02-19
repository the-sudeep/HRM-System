const genAuthToken = require("./genAuthToken");
const User = require("../models/HRmodel");

const sendToken = async (user, statusCode, res) => {
  const token = genAuthToken(user);

  const cookieOptions = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
  };
  const loggedInUser = await User.findById(user._id).select("-password");
  res.status(statusCode).cookie("token", token, cookieOptions).json({
    success: true,
    user: loggedInUser,
    token,
  });
};

module.exports = sendToken;

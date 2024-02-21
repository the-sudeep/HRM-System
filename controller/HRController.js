const User = require("../models/HRmodel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/sendJwtToken");

exports.registerUser = async (req, res) => {
  // take credentials
  // check if any fields are empty
  // check if any user already exists
  //encrypt the user password
  //create the user

  try {
    const { username, password, email, phone } = req.body;

    if (!username || !email || !password || !phone) {
      res.status(400).json({
        message: "All the fields are required!!",
      });
    }

    const isUserAvailable = await User.findOne({ email });

    if (isUserAvailable) {
      res.status(400).json({
        message: "User already exists!!",
      });
    }

    const encryptedPw = await bcrypt.hash(password, 10);

    //Create the object of the user data..
    const createdUser = await User.create({
      username,
      email,
      password: encryptedPw,
      phone,
    });

    //Exclude the password field in client side of registration..
    const registeredUser = await User.findById(createdUser._id).select(
      "-password"
    );

    res.status(200).json({
      message: "User registration complete!!",
      data: registeredUser,
    });
  } catch (error) {
    console.log("Error during registeration of user:", error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Please enter your email and password" });
    }

    const user = await User.findOne({ email: req.body.email });

    // Check if the given email and password is valid or not
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);

    // Check if the password matches the user credentials for login
    if (!isValid) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// module.exports = registerUser;
// module.exports = loginUser;
//module.exports = logoutUser;

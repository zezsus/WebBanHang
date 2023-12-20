const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const SignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      success: false,
      message: "Missing email or password",
    });
  }

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.json({
        success: false,
        message: "Email or password incorrect",
      });
    }

    return res.json({
      success: true,
      message: "SignIn successfully.",
      user,
    });
  } catch (error) {}
};

const SignUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({
      success: false,
      message: "Missing username or email or password",
    });
  }

  try {
    const user = await User.findOne({ username, email });

    if (user) {
      return res.json({
        success: false,
        message: "Username or email already",
      });
    } else {
      const newUser = User({ username, email, password });
      await newUser.save();

      res.json({
        success: true,
        message: "SignUp successfully.",
        newUser,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  SignIn,
  SignUp,
};

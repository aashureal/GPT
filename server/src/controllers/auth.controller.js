const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const {
    fullName: { firstName, lastName },
    email,
    password,
  } = req.body;

  try {
    // check user
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "Email already registered" });
    }

    // hash password

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      fullName: { firstName, lastName },
      email,
      password: hashPassword,
    });

    // Generate token
    const token = JWT.sign({ id: newUser._id }, process.env.JWT_SECRET);

    // Set cookie
    res.cookie("token", token);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("Signup error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { registerUser };

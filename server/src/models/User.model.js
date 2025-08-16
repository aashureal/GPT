const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unquie: true,
  },

  email: {
    type: String,
    required: true,
    unquie: true,
  },

  password: {
    type: String,
    require: true,
  },

  avatar: {
    type: String,
  },

  phone: { type: String },

  address: { type: String },

  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);

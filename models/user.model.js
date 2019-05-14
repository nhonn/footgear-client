"use strict";
const Schema = require("mongoose").Schema;

const userSchema = new Schema({
  userID: String,
  fullname: String,
  gender: Boolean, //0: Male, 1: Female
  email: String,
  password: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;

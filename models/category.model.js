"use strict";
const Schema = require("mongoose").Schema;

const categorySchema = new Schema({
  categoryID: String,
  name: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;

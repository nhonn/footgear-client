"use strict";
const Schema = require("mongoose").Schema;

const productSchema = new Schema({
  productID: String,
  categoryID: String,
  name: String,
  price: Number,
  description: String,
  size: [Number],
  imgUrls: [String],
  created_at: {
    type: Date,
    default: Date.now
  },
  isArchived: {
    type: Boolean,
    default: false
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

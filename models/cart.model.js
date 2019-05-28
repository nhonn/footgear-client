"use strict";
const Schema = require("mongoose").Schema;

const cartSchema = new Schema({
  cartID: String,
  items: [Object],
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;

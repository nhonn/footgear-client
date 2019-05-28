"use strict";
const Schema = require("mongoose").Schema;

const orderSchema = new Schema({
  orderID: String,
  totalPrice: Number,
  items: [Object],
  status: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

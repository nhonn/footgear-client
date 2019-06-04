'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
  cartID: {
    type: String,
    required: true,
    default: Date.now
  },
  userID: {
    type: String,
    required: true
  },
  items: [Object],
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart

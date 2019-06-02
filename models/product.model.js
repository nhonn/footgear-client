'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  productID: {
    type: String,
    required: true,
    default: Date.now
  },
  categoryID: {
    type: String,
    required: true
  },
  brandID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: String,
  size: [Number],
  imgUrls: [String],
  noOfPurchased: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  isArchived: {
    type: Boolean,
    default: false
  }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product

'use strict'
const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
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
  slug: {
    type: String,
    slug: 'name',
    unique: true
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

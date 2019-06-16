'use strict'
const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const Schema = mongoose.Schema
const Product = require('./product.model')

const brandSchema = new Schema({
  brandID: {
    type: String,
    required: true,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: 'name'
  },
  img: String,
  created_at: {
    type: Date,
    default: Date.now
  }
})

brandSchema.methods.findBrandProducts = async function () {
  return Product.find({ brandID: this.brandID })
}

brandSchema.statics.findAll = async function () {
  return this.model('Brand').find({})
}

const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand

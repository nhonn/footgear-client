'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand

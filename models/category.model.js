'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  categoryID: {
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

const Category = mongoose.model('Category', categorySchema)
module.exports = Category

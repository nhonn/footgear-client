'use strict'
const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
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
  slug: {
    type: String,
    slug: 'name'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category

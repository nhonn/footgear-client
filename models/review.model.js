'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  reviewID: {
    type: String,
    required: true,
    default: Date.now
  },
  userID: {
    type: String,
    required: true
  },
  productID: {
    type: String,
    required: true
  },
  content: String,
  created_at: {
    type: Date,
    default: Date.now
  }
})

reviewSchema.pre('save', function() {
  this.created_at = Date.now
})

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review

'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.model')
const moment = require('moment')

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

reviewSchema.pre('save', function () {
  this.created_at = Date.now
})

reviewSchema.statics.get = async function (id) {
  const users = await User.find({})
  let reviews = await this.model('Review').find({ productID: id }, null, {
    sort: { created_at: -1 }
  })
  reviews.forEach(e => {
    e.name = users.filter(x => x.userID == e.userID)[0].fullname
    e.date = moment(e.created_at).format('HH:mm DD:MM:YYYY')
  })

  return reviews
}

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review

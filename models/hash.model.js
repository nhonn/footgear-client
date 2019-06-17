'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hashSchema = new Schema({
  userID: {
    type: String,
    required: true
  }
})

const Hash = mongoose.model('Hash', hashSchema)
module.exports = Hash

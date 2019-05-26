'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  fullname: String,
  gender: {
    // 0: Male, 1: Female
    type: Boolean,
    default: 0
  },
  email: {
    type: String,
    required: true
  },
  birthYear: Number,
  password: {
    type: String,
    required: true
  },
  // 0: Client, 1: Admin
  role: {
    type: Boolean,
    default: 0,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: 0,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

userSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 5)
})

userSchema.statics.checkPassword = function(req) {
  this.model('User').findOne({ email: req.body.email }, function(err, result) {
    if (err) console.log(err)
    if (result != null) {
      bcrypt.compare(req.body.password, result.password, function(err, res) {
        if (err) console.log(err)
        if (res === true) return true
        return false
      })
    }
    return false
  })
}

userSchema.methods.changePassword = async function(newPassword) {
  this.password = await bcrypt.hash(newPassword, 5)
}

userSchema.query.findAllClients = function() {
  return this.model('User').find({ role: 0 })
}

const User = mongoose.model('User', userSchema)
module.exports = User

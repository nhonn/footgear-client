'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const Hash = require('../models/hash.model')

const userSchema = new Schema({
  userID: {
    type: String,
    required: true,
    default: Date.now
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
  password: {
    type: String,
    required: true
  },
  phone: String,
  isActive: {
    type: Boolean,
    default: 0,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date,
    default: Date.now
  }
})

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 5)
  }
  this.updated_at = Date.now
})

userSchema.statics.active = async function (userID, code) {
  const hash = await Hash.findOne({ userID: userID })
  if (hash == null || hash === undefined) return false
  if (code == hash._id) {
    let user = await User.findOne({ userID: userID })
    user.isActive = true
    user.save()
    Hash.findByIdAndRemove(code)
    return true
  } else {
    return false
  }
}

userSchema.statics.reset = async function (userID, code) {
  const hash = await Hash.findOne({ userID: userID })
  if (hash == null || hash === undefined) return false
  if (code == hash._id) {
    let user = await User.findOne({ userID: userID })
    user.isActive = true
    user.password = '00000000'
    user.save()
    Hash.findByIdAndRemove(code)
    return true
  } else {
    return false
  }
}

userSchema.statics.getName = async function (userID) {
  let user = await this.model('User').findOne({ userID })
  if (user) return user.fullname
  return 'Khách hàng'
}

userSchema.statics.get = async function (email) {
  return await this.model('User').findOne({ email, isActive: true })
}

userSchema.statics.check = async function (email) {
  const user = await this.model('User').findOne({ email })
  if (user != null) return true
  return false
}

userSchema.statics.verify = async function (email, password) {
  const user = await this.model('User').get(email)
  if (user == null) return false
  return await bcrypt.compare(password, user.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User

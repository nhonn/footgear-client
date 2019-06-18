'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const orderSchema = new Schema({
  orderID: {
    type: String,
    required: true,
    default: Date.now
  },
  userID: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    default: 0
  },
  items: [Object],
  // processing, shipping, done
  status: {
    type: String,
    default: 'processing'
  },
  fullname: String,
  address: String,
  phone: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

orderSchema.statics.get = async function (id) {
  let orders = await this.model('Order').find({ orderID: id })
  orders.forEach(e => {
    e.date = moment(e.created_at).format('HH:mm DD:MM:YYYY')
    if (e.status === 'processing') e.state = 'Đang xử lý'
    else if (e.status === 'shipping') e.state = 'Đang giao hàng'
    else e.state = 'Đã hoàn thành'
  });
  return orders
}

orderSchema.statics.findByUserID = async function (id) {
  let orders = await this.model('Order').find({ userID: id })
  orders.forEach(e => {
    e.date = moment(e.created_at).format('HH:mm DD:MM:YYYY')
    if (e.status === 'processing') e.state = 'Đang xử lý'
    else if (e.status === 'shipping') e.state = 'Đang giao hàng'
    else e.state = 'Đã hoàn thành'
  });
  return orders
}

orderSchema.statics.findOrdersByStatus = async function (id, state) {
  let orders = await this.model('Order').find({ userID: id, status: state })
  orders.forEach(e => {
    e.date = moment(e.created_at).format('HH:mm DD:MM:YYYY')
    if (state === 'processing') e.state = 'Đang xử lý'
    else if (state === 'shipping') e.state = 'Đang giao hàng'
    else state = 'Đã hoàn thành'
  });
  return orders
}

const Order = mongoose.model('Order', orderSchema)
module.exports = Order

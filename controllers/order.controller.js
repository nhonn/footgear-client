'use strict';
const Order = require('../models/order.model')

module.exports = {
  getOrder: async (req, res) => {
    let view = req.query.view
    if (view == 'proc') view = 'processing'
    else if (view == 'ship') view = 'shipping'
    else if (view == 'done') view = 'done'
    else view = null
    let orders
    if (view == null || view === undefined)
      orders = await Order.findByUserID(req.user.userID)
    else
      orders = await Order.findOrdersByStatus(req.user.userID, view)
    res.status(200).render('order', {
      title: 'Đơn hàng',
      orders
    })
  },

  addNewOrder: (req, res) => {
    const cart = req.session.cart
    const info = req.body
    let newOrder = new Order({
      totalPrice: cart.total,
      items: cart.items,
      userID: req.user.userID,
      fullname: info.fullname,
      address: info.address,
      phone: info.phone
    })
    newOrder.save()
    res.status(200).redirect('/don-hang')
  }
}

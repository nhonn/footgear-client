const Cart = require('../models/cart.model')

module.exports = {
  getCart: async (req, res) => {
    let cart = await Cart.findOne({}, (err, docs) => {
      if (err) console.log(err)
      return docs
    })
    let total = 0
    cart.items.forEach(element => {
      total += element.price
    })
    res.status(200).render('cart/index', {
      cart: cart,
      title: 'Giỏ hàng',
      totalPrice: total
    })
  }
}

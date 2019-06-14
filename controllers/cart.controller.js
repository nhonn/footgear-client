const Product = require('../models/product.model')

function getCart(req) {
  let cart = req.session.cart
  if (cart == null || cart === undefined) {
    cart = { items: [], total: 0 }
    req.session.cart = cart
  }
  return cart
}

module.exports = {
  getCart: (req, res) => {
    const cart = getCart(req)
    res.status(200).render('cart', {
      title: 'Giỏ hàng',
      cart
    })
  },

  addItems: async (req, res) => {
    let cart = getCart(req)
    const product = await Product.findOne({ productID: req.query.id })
    if (product == null) res.status(404).render('error404')
    cart.items.push({
      name: product.name,
      productID: product.productID,
      price: product.price,
      size: req.query.size,
      imgUrls: product.imgUrls
    })
    cart.total += Number.parseInt(product.price)
    req.session.cart = cart
    res.json({ sucess: true })
  },

  removeItem: (req, res) => {
    let cart = getCart(req)
    cart.items = cart.items.filter(x => x.productID !== req.query.id)
    cart.total = 0
    cart.items.forEach(x => {
      cart.total += Number.parseInt(x.price)
    })
    req.session.cart = cart
    res.redirect(req.get('referrer'))
  }
}

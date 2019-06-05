const Product = require('../models/product.model')
const sessionStorage = require('sessionstorage')

function getCart() {
  let cart = sessionStorage.getItem('cart')
  if (cart === undefined || cart == null) cart = { items: [], total: 0 }
  return cart
}

module.exports = {
  getCart: (req, res) => {
    const cart = getCart()
    res.status(200).render('cart', { title: 'Giỏ hàng', cart: cart })
  },

  addItems: async (req, res) => {
    let product = await Product.findOne(
      { productID: req.query.id },
      (err, doc) => {
        if (err) console.log(err)
        if (doc == null) res.status(404).render('error404')
        return doc
      }
    )
    let cart = getCart()
    cart.items.push({
      name: product.name,
      productID: product.productID,
      price: product.price,
      size: req.query.size,
      imgUrls: product.imgUrls
    })
    cart.total += Number.parseInt(product.price)
    sessionStorage.setItem('cart', cart)
    res.json({ success: true })
  },

  removeItem: (req, res) => {
    let cart = getCart()
    cart.items.filter(obj => {
      return obj.id !== req.query.id
    })
    sessionStorage.set('cart', cart)
  }
}

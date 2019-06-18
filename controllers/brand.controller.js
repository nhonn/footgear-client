const Brand = require('../models/brand.model')

module.exports = {
  getBrand: async (req, res) => {
    const brand = await Brand.findOne({ slug: req.params.id })
    if (brand == null) {
      res.status(404).render('error404')
    }
    const order = req.query.order
    let list = await brand.findBrandProducts()
    if (order == 'newest') {
      list.sort((a, b) => b.created_at - a.created_at)
    } else if (order == 'top') {
      list.sort((a, b) => b.noOfPurchased - a.noOfPurchased)
    } else if (order == 'asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (order == 'desc') {
      list.sort((a, b) => b.price - a.price)
    }
    res.status(200).render('brand', {
      title: brand.name,
      list,
      brand
    })
  }
}

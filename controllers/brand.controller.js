const Brand = require('../models/brand.model')

module.exports = {
  getBrand: async (req, res) => {
    const brand = await Brand.findOne({ slug: req.params.id })
    if (brand == null) {
      res.status(404).render('error404')
    }
    const order = req.query.order
    const page = req.query.p
    const min = page == null || page === undefined || page <= 15 ? 0 : req.query.p - 15
    const max = page + 15
    let list = await brand.findBrandProducts()
    if (order === 'newest') {
      list.slice(min, max).sort((a, b) => b.created_at - a.created_at)
    } else if (order === 'top') {
      list.slice(min, max).sort((a, b) => a.noOfPurchased - b.noOfPurchased)
    } else if (order === 'asc') {
      list.slice(min, max).sort((a, b) => a.price - b.price)
    } else if (order === 'desc') {
      list.slice(min, max).sort((a, b) => b.price - a.price)
    }
    res.status(200).render('brand', {
      title: brand.name,
      list,
      brand
    })
  }
}

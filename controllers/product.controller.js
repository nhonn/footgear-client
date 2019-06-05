const Product = require('../models/product.model')
const Brand = require('../models/brand.model')

module.exports = {
  getDetail: async (req, res) => {
    const item = await Product.findOne({ slug: req.params.id })
    const brand = await Brand.findOne({ brandID: item.brandID })
    if (item == null || brand == null) res.status(404).render('error404')
    const sameBrand = await brand.findBrandProducts()
    res.status(200).render('product', {
      title: item.name,
      item: item,
      brand: brand,
      sameBrand: sameBrand
    })
  }
}

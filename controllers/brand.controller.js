const Product = require('../models/product.model')
const Brand = require('../models/brand.model')

module.exports = {
  getBrand: async (req, res) => {
    let brand = await Brand.findOne({ slug: req.params.id }, (err, res) => {
      if (err) console.log(err)
      return res
    })
    if (brand == null) {
      res.status(404).render('error404')
    }
    let list = await Product.find({ brandID: brand.brandID }, (err, res) => {
      if (err) console.log(err)
      return res
    })
    res.status(200).render('category/index', { list: list, brand: brand.name })
  }
}

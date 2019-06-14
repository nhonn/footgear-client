const Brand = require('../models/brand.model')

module.exports = {
  getBrand: async (req, res) => {
    const brand = await Brand.findOne({ slug: req.params.id })
    if (brand == null) {
      res.status(404).render('error404')
    } else {
      const list = await brand.findBrandProducts()
      res.status(200).render('brand', {
        title: brand.name,
        list,
        brand
      })
    }
  }
}

const Product = require('../models/product.model')
const Brand = require('../models/brand.model')

async function findSameBrand(id) {
  return Product.find({ brandID: id }, null, { limit: 10 }, (err, docs) => {
    if (err) console.log(err)
    return docs
  })
}

module.exports = {
  getDetail: async (req, res) => {
    const item = await Product.findOne({ slug: req.params.id }, (err, doc) => {
      if (err) console.log(err)
      if (doc == null) res.status(404).render('error404')
      return doc
    })
    const brand = await Brand.findOne({ brandID: item.brandID }, (err, doc) => {
      if (err) console.log(err)
      return doc
    })
    const sameBrand = await findSameBrand(brand.brandID)
    res.status(200).render('product/index', {
      title: item.name,
      item: item,
      brand: brand,
      sameBrand: sameBrand
    })
  }
}

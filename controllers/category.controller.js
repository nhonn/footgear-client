const Product = require('../models/product.model')
const Category = require('../models/category.model')

module.exports = {
  getCategory: async (req, res) => {
    let cat = await Category.findOne({ slug: req.params.id }, (err, res) => {
      if (err) console.log(err)
      return res
    })
    if (cat == null) {
      res.status(404).render('error404')
    }
    let list = await Product.find(
      { categoryID: cat.categoryID },
      (err, res) => {
        if (err) console.log(err)
        return res
      }
    )
    res.status(200).render('category/index', {
      list: list,
      title: cat.name,
      category: cat
    })
  }
}

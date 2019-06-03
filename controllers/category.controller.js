const Product = require('../models/product.model')
const Category = require('../models/category.model')

module.exports = {
  getCategory: (req, res) => {
    res.status(200).render('category/index')
  }
}

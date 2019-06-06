const Category = require('../models/category.model')

module.exports = {
  getCategory: async (req, res) => {
    const cat = await Category.findOne({ slug: req.params.id })
    if (cat == null) {
      res.status(404).render('error404')
    } else {
      const list = await cat.findCategoryProducts()
      res.status(200).render('category', {
        list: list,
        title: cat.name,
        category: cat,
        layout: req.session.layout
      })
    }
  }
}

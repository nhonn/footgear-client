const Product = require('../models/product.model')
const Brand = require('../models/brand.model')
const Review = require('../models/review.model')

module.exports = {
  getDetail: async (req, res) => {
    const item = await Product.findOne({ slug: req.params.id })
    const brand = await Brand.findOne({ brandID: item.brandID })
    if (item == null || brand == null) res.status(404).render('error404')
    item.views += 1
    item.save()
    const sameBrand = await brand.findBrandProducts()
    let reviews = await Review.get(item.productID)
    res.status(200).render('product', {
      title: item.name,
      item,
      brand,
      sameBrand,
      reviews
    })
  },

  addReview: async (req, res) => {
    let newReview = new Review({
      userID: req.user.userID,
      productID: req.params.id,
      content: req.body.content
    })
    newReview.save()
    res.redirect(req.header('Referer') || '/')
  }
}

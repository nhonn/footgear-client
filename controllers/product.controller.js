const Product = require('../models/product.model')
const Review = require('../models/review.model')
const User = require('../models/user.model')
const moment = require('moment')

module.exports = {
  getDetail: async (req, res) => {
    const item = await Product.findOne({ slug: req.params.id })
    const brand = req.brands.filter(x => x.brandID == item.brandID)
    if (item == null || brand == null) res.status(404).render('error404')
    item.views += 1
    item.save()
    const sameBrand = await brand.findBrandProducts()
    let reviews = await Review.find({ productID: item.productID }, null, {
      sort: { created_at: -1 }
    })
    reviews.forEach(async e => {
      e.name = await User.getName(e.userID)
      e.date = moment(e.created_at).format('HH:mm DD:MM:YYYY')
    })
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

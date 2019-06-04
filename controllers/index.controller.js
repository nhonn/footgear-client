'use strict'
const Product = require('../models/product.model')
const Brand = require('../models/brand.model')

module.exports = {
  getHomepage: async (req, res) => {
    const banners = [
      '/img/banners/sara-rolin-330229.jpg',
      '/img/banners/alice-donovan-rouse-199230.jpg',
      '/img/banners/edgar-chaparro-677232.jpg',
      '/img/banners/nadine-shaabana-144431.jpg'
    ]
    const brands = await Brand.findAllBrands()

    const newArrivals = await Product.findNewArrivals()
    const hotItems = await Product.findHotItems()
    res.status(200).render('home/index', {
      title: 'Sneakiie: Trang chủ',
      banners: banners,
      brands: brands,
      hotItems: hotItems,
      newArrivals: newArrivals
    })
  }
}

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
    const brands = await Brand.findAll()
    const newArrivals = await Product.findNewArrivals()
    const hotItems = await Product.findHotItems()
    res.status(200).render('home', {
      title: 'Sneakiie: Trang chủ',
      banners,
      brands,
      hotItems,
      newArrivals
    })
  },

  getTermsPage: (req, res) => {
    res.status(200).render('home/terms', {
      title: 'Điều khoản sử dụng'
    })
  },

  getSearchPage: (req, res) => {
    res.status(200).render('home/search', {
      title: 'Tìm kiếm'
    })
  }
}

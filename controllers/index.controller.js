'use strict'
const Product = require('../models/product.model')
const Brand = require('../models/brand.model')

async function findNewArrivals() {
  return Product.find(
    {},
    null,
    { limit: 10, sort: { updated_at: -1 } },
    (err, docs) => {
      if (err) console.log(err)
      return docs
    }
  )
}

async function findHotItems() {
  return Product.find(
    {},
    null,
    { limit: 10, sort: { noOfPurchased: -1 } },
    (err, docs) => {
      if (err) console.log(err)
      return docs
    }
  )
}

async function findAllBrands() {
  return Brand.find({}, (err, docs) => {
    if (err) console.log(err)
    return docs
  })
}

module.exports = {
  getHomepage: async (req, res) => {
    const banners = [
      '/img/banners/sara-rolin-330229.jpg',
      '/img/banners/alice-donovan-rouse-199230.jpg',
      '/img/banners/edgar-chaparro-677232.jpg',
      '/img/banners/nadine-shaabana-144431.jpg'
    ]
    const brands = await findAllBrands()

    const newArrivals = await findNewArrivals()
    const hotItems = await findHotItems()
    res.status(200).render('home/index', {
      title: 'Sneakiie: Trang chủ',
      banners: banners,
      brands: brands,
      hotItems: hotItems,
      newArrivals: newArrivals
    })
  }
}

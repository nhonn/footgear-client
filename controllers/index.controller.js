'use strict'

module.exports = {
  getHomepage: (req, res) => {
    const banners = [
      '/img/banners/sara-rolin-330229.jpg',
      '/img/banners/alice-donovan-rouse-199230.jpg',
      '/img/banners/edgar-chaparro-677232.jpg',
      '/img/banners/nadine-shaabana-144431.jpg'
    ]
    const brands = [
      {
        name: 'Nike',
        id: 'nike',
        img: '/img/brands/nike.jpg'
      },
      {
        name: "Biti's",
        id: 'bitis',
        img: '/img/brands/bitis.jpg'
      },
      {
        name: 'Adidas',
        id: 'adidas',
        img: '/img/brands/adidas.jpg'
      },
      {
        name: 'Vans',
        id: 'vans',
        img: '/img/brands/vans.jpg'
      },
      {
        name: 'Converse',
        id: 'converse',
        img: '/img/brands/converse.jpg'
      }
    ]
    const hotItems = [
      {
        name: 'Bitis Super Hot',
        price: 1200000,
        img:
          '/img/Giày Sneaker Unisex Converse Chuck Taylor All Star Classic Low - White.jpg'
      },
      {
        name: 'Adidas Ultra Hot',
        price: 2200000,
        img: '/img/Giày Adidas ADIDAS Fluidcloud CC Ambitious M CG2727.jpg'
      },
      {
        name: 'Vans Omega Hot',
        price: 1800000,
        img: '/img/vans-old-skool-classic-black-white-vn000d3hy28-4.png'
      },
      {
        name: 'Vans Theta Hot',
        price: 1850000,
        img: '/img/vans-classic-mix-checkerboard-sk8-hi-vn0a38geq9b-2.png'
      }
    ]
    const newArrivals = [
      {
        id: 'owao',
        name: 'Bitis Super Hot',
        price: 1200000,
        img:
          '/img/Giày Sneaker Unisex Converse Chuck Taylor All Star Classic Low - White.jpg'
      },
      {
        id: 'owao',
        name: 'Adidas Ultra Hot',
        price: 2200000,
        img: '/img/Giày Adidas ADIDAS Fluidcloud CC Ambitious M CG2727.jpg'
      },
      {
        id: 'owao',
        name: 'Vans Omega Hot',
        price: 1800000,
        img: '/img/vans-old-skool-classic-black-white-vn000d3hy28-4.png'
      },
      {
        id: 'owao',
        name: 'Vans Theta Hot',
        price: 1850000,
        img: '/img/vans-classic-mix-checkerboard-sk8-hi-vn0a38geq9b-2.png'
      }
    ]
    res.status(200).render('index/index', {
      title: 'Sneakiie: Trang chủ',
      banners: banners,
      brands: brands,
      hotItems: hotItems,
      newArrivals: newArrivals
    })
  }
}

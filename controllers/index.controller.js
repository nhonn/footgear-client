"use strict";

module.exports = {
  getHomepage: (req, res) => {
    const banners = [
      "/img/3134083556545120.jpg",
      "/img/9186963780455400.jpg",
      "/img/banner-nike-air-max2-light.jpg"
    ];
    const brands = [
      {
        name: "Nike",
        img: "/img/nike.png",
        link: "/category/nike"
      },
      {
        name: "Biti's",
        img: "/img/bitis.jpg",
        link: "/category/bitis"
      },
      {
        name: "Adidas",
        img: "/img/adidas.jpg",
        link: "/category/adidas"
      },
      {
        name: "Vans",
        img: "/img/vans.jpg",
        link: "/category/vans"
      },
      {
        name: "Converse",
        img: "/img/converse.png",
        link: "/category/coverse"
      }
    ];
    const hotItems = [
      {
        name: "Bitis Super Hot",
        price: 1200000,
        img:
          "/img/Giày Sneaker Unisex Converse Chuck Taylor All Star Classic Low - White.jpg"
      },
      {
        name: "Adidas Ultra Hot",
        price: 2200000,
        img: "/img/Giày Adidas ADIDAS Fluidcloud CC Ambitious M CG2727.jpg"
      },
      {
        name: "Vans Omega Hot",
        price: 1800000,
        img: "/img/vans-old-skool-classic-black-white-vn000d3hy28-4.png"
      },
      {
        name: "Vans Theta Hot",
        price: 1850000,
        img: "/img/vans-classic-mix-checkerboard-sk8-hi-vn0a38geq9b-2.png"
      }
    ];
    const newArrivals = [
      {
        name: "Bitis Super Hot",
        price: 1200000,
        img:
          "/img/Giày Sneaker Unisex Converse Chuck Taylor All Star Classic Low - White.jpg"
      },
      {
        name: "Adidas Ultra Hot",
        price: 2200000,
        img: "/img/Giày Adidas ADIDAS Fluidcloud CC Ambitious M CG2727.jpg"
      },
      {
        name: "Vans Omega Hot",
        price: 1800000,
        img: "/img/vans-old-skool-classic-black-white-vn000d3hy28-4.png"
      },
      {
        name: "Vans Theta Hot",
        price: 1850000,
        img: "/img/vans-classic-mix-checkerboard-sk8-hi-vn0a38geq9b-2.png"
      }
    ];
    res.status(200).render("index/index", {
      banners: banners,
      brands: brands,
      hotItems: hotItems,
      newArrivals: newArrivals
    });
  }
};

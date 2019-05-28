module.exports = {
  getDetail: (req, res) => {
    const item = {
      name:
        "Giày Thể Thao Nữ Biti's Biti’s Hunter X – 2K18 – DSUH00400TIM - Midnight Mystery",
      brand: "Biti's",
      price: 829000,
      description:
        'Công nghệ LiteFlex độc quyền <br> Co dãn 4 chiều, thoáng khí tối đa <br>Định hình và trợ lực gót chân <br> Đế lót kháng khuẩn và massage',
      size: [38, 39, 40, 41, 42, 43],
      imgs: [
        "/img/Giày Thể Thao Nữ Biti's Biti’s Hunter X – 2K18 – DSUH00400TIM - Midnight Mystery.jpg",
        '/img/converse.png'
      ]
    }
    res.status(200).render('product/detail', { title: item.name, item: item })
  }
}

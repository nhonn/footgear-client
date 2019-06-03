module.exports = {
  getDetail: (req, res) => {
    const item = {
      name: "Giày Thể Thao Nữ Biti's Biti’s Hunter X",
      id: '123045565',
      brand: "Biti's",
      price: (829000).toLocaleString(),
      description:
        'Công nghệ LiteFlex độc quyền <br> Co dãn 4 chiều, thoáng khí tối đa Định hình và trợ lực gót chân <br> Đế lót kháng khuẩn và massage',
      size: [38, 39, 40, 41, 42, 43],
      imgs: ['/img/brands/bitis.jpg']
    }
    res.status(200).render('product/detail', { title: item.name, item: item })
  }
}

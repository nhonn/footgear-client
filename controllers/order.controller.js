module.exports = {
  getOrder: (req, res) => {
    res.status(200).render('order', {
      title: 'Đơn hàng'
    })
  }
}

module.exports = {
  getCart: (req, res) => {
    res.status(200).render('cart/index')
  }
}

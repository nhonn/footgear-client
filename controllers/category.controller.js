module.exports = {
  getCategory: (req, res) => {
    res.status(200).render('category/index')
  }
}

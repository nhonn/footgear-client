module.exports = {
  getOrder: (req, res) => {
    res.status(200).render('order', {
      layout: req.session.layout
    })
  }
}

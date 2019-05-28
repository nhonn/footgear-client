module.exports = {
  isLoggedIn: (req, res, next) => {
    if (!req.session.uid) {
      console.log(req.session)
      next()
    } else {
      res.redirect('/tai-khoan/dang-nhap')
    }
  }
}

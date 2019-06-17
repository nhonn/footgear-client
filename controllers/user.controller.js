'use strict';
module.exports = {
  getLoginPage: (req, res) => {
    if (req.user) res.status(200).redirect('/tai-khoan')
    res.status(200).render('user/signin', {
      title: 'Đăng nhập',
      flash: req.flash('error')
    })
  },

  getRegisterPage: (req, res) => {
    if (req.user) res.status(200).redirect('/tai-khoan')
    res.status(200).render('user/signup', {
      title: 'Đăng ký tài khoản'
    })
  },

  getProfilePage: async (req, res) => {
    if (!req.user) res.status(403).redirect('/tai-khoan/dang-nhap')
    res.status(200).render('user', {
      title: 'Thông tin tài khoản'
    })
  }
}

module.exports = {
  getLoginPage: (req, res) => {
    res.status(200).render('user/signin', {
      title: 'Đăng nhập'
    })
  },

  getRegisterPage: (req, res) => {
    res.status(200).render('user/signup', {
      title: 'Đăng ký tài khoản'
    })
  },

  getProfilePage: async (req, res) => {
    res.status(200).render('user', {
      title: 'Thông tin tài khoản',
      user: req.user
    })
  }
}

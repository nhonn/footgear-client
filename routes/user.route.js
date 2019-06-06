const router = require('express').Router()
const ctrl = require('../controllers/user.controller')

function isSignedIn(req, res, next) {
  if (req.user) {
    next()
  } else res.redirect('/tai-khoan/dang-nhap')
}

router.get('/', isSignedIn, ctrl.getProfilePage)

router.get('/dang-nhap', ctrl.getLoginPage)

router.get('/dang-ky', ctrl.getRegisterPage)

module.exports = router

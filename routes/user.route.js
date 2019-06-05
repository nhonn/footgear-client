const router = require('express').Router()
const ctrl = require('../controllers/user.controller')
const passport = require('passport')

router
  .route('/dang-nhap')
  .get(ctrl.getLoginPage)
  .post(
    passport.authenticate('local', { failureRedirect: '/tai-khoan/dang-nhap' }),
    function(req, res) {
      res.redirect('/')
    }
  )

router
  .route('/dang-ky')
  .get(ctrl.getRegisterPage)
  .post(ctrl.registerNewUser)

router.get('/', ctrl.getProfilePage)

module.exports = router

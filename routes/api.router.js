const router = require('express').Router()
const ctrl = require('../controllers/api.controller')
const passport = require('passport')

router.post(
  '/signin',
  passport.authenticate('local', { failureRedirect: '/tai-khoan/dang-nhap' }),
  function(req, res) {
    res.redirect('/')
  }
)

router.post('/signup', ctrl.registerNewUser)

module.exports = router

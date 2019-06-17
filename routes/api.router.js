const router = require('express').Router()
const ctrl = require('../controllers/api.controller')
const passport = require('passport')

router.post(
  '/signin',
  (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/tai-khoan/dang-nhap',
      failureFlash: true
    })(req, res, next)
  })

router.post('/update', ctrl.update)

router.post('/signup', ctrl.signup)

router.get('/signout', ctrl.signout)

router.post('/reset', ctrl.reset)

module.exports = router

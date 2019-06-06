const router = require('express').Router()
const ctrl = require('../controllers/api.controller')
const passport = require('passport')

router.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/tai-khoan/dang-nhap'
  })
)

router.post('/update', ctrl.update)

router.post('/signup', ctrl.signup)

router.get('/signout', ctrl.signout)

module.exports = router

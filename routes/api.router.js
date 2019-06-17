const router = require('express').Router()
const ctrl = require('../controllers/api.controller')
const passport = require('passport')

router.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/tai-khoan/dang-nhap',
    failureFlash: true
  })
)

router.post('/updateProfile', ctrl.updateProfile)
router.post('/updatePassword', ctrl.updatePassword)

router.post('/signup', ctrl.signup)

router.get('/signout', ctrl.signout)

router.post('/reset', ctrl.reset)

module.exports = router

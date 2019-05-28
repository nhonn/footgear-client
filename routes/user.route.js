const router = require('express').Router()
const ctrl = require('../controllers/user.controller')

router
  .route('/dang-nhap')
  .get(ctrl.getLoginPage)
  .post(ctrl.clientLogin)

router
  .route('/dang-ky')
  .get(ctrl.getRegisterPage)
  .post(ctrl.registerNewUser)

router.get('/', ctrl.getProfilePage)

module.exports = router

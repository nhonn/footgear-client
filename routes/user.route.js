const router = require('express').Router()
const ctrl = require('../controllers/user.controller')

router.get('/dang-nhap', ctrl.getLoginPage)

router.get('/dang-ky', ctrl.getRegisterPage)

router.get('/', ctrl.getProfilePage)

module.exports = router

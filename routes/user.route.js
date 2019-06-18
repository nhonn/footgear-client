const router = require('express').Router()
const ctrl = require('../controllers/user.controller')

router.get('/', ctrl.getProfilePage)

router.get('/dang-nhap', ctrl.getLoginPage)

router.get('/dang-ky', ctrl.getRegisterPage)

module.exports = router

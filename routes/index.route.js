const router = require('express').Router()
const ctrl = require('../controllers/index.controller')

router.get('/', ctrl.getHomepage)

router.get('/dieu-khoan-su-dung', ctrl.getTermsPage)

router.get('/tim-kiem', ctrl.getSearchPage)

module.exports = router

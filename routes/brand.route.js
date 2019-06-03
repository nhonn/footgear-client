const router = require('express').Router()
const ctrl = require('../controllers/brand.controller')

router.get('/', ctrl.getBrand)

module.exports = router

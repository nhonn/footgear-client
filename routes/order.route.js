const router = require('express').Router()
const ctrl = require('../controllers/order.controller')

router.get('/', ctrl.getOrder)

module.exports = router

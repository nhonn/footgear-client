const router = require('express').Router()
const ctrl = require('../controllers/order.controller')

router.get('/', ctrl.getOrder)

router.post('/', ctrl.addNewOrder)

module.exports = router

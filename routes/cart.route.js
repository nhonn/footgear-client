const router = require('express').Router()
const ctrl = require('../controllers/cart.controller')

router.get('/', ctrl.getCart)

module.exports = router

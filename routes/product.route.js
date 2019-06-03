const router = require('express').Router()
const ctrl = require('../controllers/product.controller')

router.get('/:id', ctrl.getDetail)

module.exports = router

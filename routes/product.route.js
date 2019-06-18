const router = require('express').Router()
const ctrl = require('../controllers/product.controller')

router.get('/:id', ctrl.getDetail)

router.post('/addReview/:id', ctrl.addReview)

module.exports = router

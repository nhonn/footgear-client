const router = require('express').Router()
const ctrl = require('../controllers/cart.controller')

router
  .route('/')
  .get(ctrl.getCart)
router.post('/:id', ctrl.addItems)

router.post('/rm/:id', ctrl.removeItem)

module.exports = router

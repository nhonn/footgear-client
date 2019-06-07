const router = require('express').Router()
const ctrl = require('../controllers/cart.controller')

router
  .route('/')
  .get(ctrl.getCart)
  .post(ctrl.addItems)

router.post('/rm', ctrl.removeItem)

module.exports = router

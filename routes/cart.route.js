const router = require('express').Router()
const ctrl = require('../controllers/cart.controller')

function isAuthorized(req, res, next) {
  if (req.user) next()
  else res.status(401).redirect('/tai-khoan/dang-nhap')
}

router.get('/', ctrl.getCart)

router.post('/:id', ctrl.addItems)

router.post('/rm/:id', ctrl.removeItem)

router.get('/thanh-toan', isAuthorized, ctrl.checkout)

module.exports = router

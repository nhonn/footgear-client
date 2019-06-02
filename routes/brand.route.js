const router = require('express').Router()
const ctrl = require('../controllers/brand.controller')

router.get('/', ctrl.getIndex)

module.exports = router

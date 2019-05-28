const router = require('express').Router()
const ctrl = require('../controllers/category.controller')

router.get('/', ctrl.getIndex)

module.exports = router

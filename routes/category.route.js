const router = require('express').Router()
const ctrl = require('../controllers/category.controller')

router.get('/:id', ctrl.getCategory)

module.exports = router

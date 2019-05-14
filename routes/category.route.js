const router = require("express").Router();
const ctrl = require("../controllers/genre.controller");

router.get("/", ctrl.getIndex);

module.exports = router;

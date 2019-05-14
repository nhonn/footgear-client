const router = require("express").Router();
const ctrl = require("../ctrls/index.controller");

router.get("/", ctrl.getHomepage);

module.exports = router;

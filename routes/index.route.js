const router = require("express").Router();
const controller = require("../controllers/index.controller");

router.get("/", controller.getHomepage);

module.exports = router;

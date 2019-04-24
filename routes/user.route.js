const router = require("express").Router();
const ctrl = require("../controllers/user.controller");

router.get("/login", ctrl.getLoginPage);
router.get("/register", ctrl.getRegisterPage);
router.get("/profile", ctrl.getProfilePage);

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/login", function(req, res, next) {
  res.render("login", { title: "Đăng nhập" });
});

router.get("/register", function(req, res, next) {
  res.render("register", { title: "Đăng ký" });
});

router.get("/profile", function(req, res, next) {
  res.render("profile", { title: "Thông tin tài khoản" });
});

module.exports = router;

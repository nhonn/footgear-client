var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/cart", (req, res) => {
  res.render("cart", { title: "Giỏ hàng" });
});

router.get("/category", (req, res) => {
  res.render("category.hbs");
});

router.get("/detail", (req, res) => {
  res.render("productDetail");
});
router.get("/checkout", (req, res) => {
  res.render("checkout");
});

router.get("/orders/history", (req, res) => {
  res.render("order");
});
module.exports = router;

var express = require("express");
var router = express.Router();
var property = require("../controllers/controllerCart");

router.get("/add/:productId", property.cart);

module.exports = router;
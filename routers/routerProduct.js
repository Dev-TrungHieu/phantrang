var express = require("express");
var router = express.Router();
var property = require("../controllers/controlerProduct");

router.get("/", property.index);

module.exports = router;
var express = require("express");
var router = express.Router();
var property = require("../controllers/controllerUser");

router.get("/demo", property.user);
module.exports = router;

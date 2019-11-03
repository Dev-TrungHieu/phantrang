require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");
var db= require("./db");
var useRouter = require("./routers/routerProduct");
var useCart = require("./controllers/controllerCart");
var cookieParser = require("cookie-parser");
var useSession = require("./middleware/middlewareSession");
var mongoose = require("mongoose");
var useUser = require("./routers/routerUser");

mongoose.connect(process.env.MONGO_URL);

console.log(process.env.MONGO_URL);
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/resource", express.static(__dirname + "/resource"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(useSession);
app.use("/cart", useCart);
app.use("/product", useRouter);
app.use("/user", useUser);

app.listen(3000,function() {
  console.log("Created server on port 3000 !");
})

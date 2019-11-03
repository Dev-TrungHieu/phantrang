var dbUser = require("../models/modelScheme");

module.exports.user = function (req, res) {
    dbUser.find().then(function( user){
        res.render("user", {
            user: user
        });
    })
}
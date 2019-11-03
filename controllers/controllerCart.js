    var db = require("../db");

    var cart = function (req, res, next) {
    var productId = req.params.productId;
    console.log(productId);
    var sessionId = req.signedCookies.sessionId;
    
    if(!sessionId){
        res.redirect('/product');
        return;
    }

    var count = db.get('session').find({ id: sessionId}).get('cart.' + productId, 0).value();

    var x =  db.get('session').find({ id: sessionId }).set('cart.' + productId, count + 1).write();
    console.log(x);
    res.redirect('/product');
    }

    module.exports = cart;
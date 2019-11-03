var shortid = require("short-id");
var db = require("../db");

module.exports = function (req, res ,next) {
  if(!req.signedCookies.sessionId){
    var sessionId = shortid.generate();
    res.cookie('sessionId', sessionId, {
      signed: true
    });
    db.get('session').push({
      id: sessionId,
      cart: {}
    }).write();
  }
  next();
}

var db = require("../db");

module.exports.index =  function (req, res) {
    var itemPage = 8;
    var page = parseInt(req.query.page) || 1; 
    var begin = (page -1)* itemPage;
    var end = page * itemPage;
    var soPage = db.get('product').value().length;
    if(soPage%8 !== 0){
        var maxPage = parseInt(soPage/8) + 1;
    }else{
        var maxPage = soPage/8;
    } 
    var giatri = maxPage;
    res.render("index", {
        products: db.get('product').value().slice(begin, end),
        page: page,
        giatri: giatri
    });
}

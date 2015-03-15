var express = require("express");
var router = express.Router();
var options = {
	root: __dirname + "/../layouts"
};

router.use(express.static(__dirname+"/../assets"));
router.get('/', function(req, res, next) {
    
    res.sendFile("index.html", options);
});

module.exports = router;


// var bodyParser = require("body-parser");
var router = require("express").Router();
var user = require("./user.js");
router.get("/", function(req, res) {
    // res.render("index.html");
    user.all(req, res);
});

router.get("/add", function(req, res) {
    user.add(req, res);
});

router.post("/queryById", function(req, res) {
    user.queryById(req, res);
});
router.post("/show", function(req, res) {
    user.show(req, res);
});
router.post("/delete", function(req, res) {
    user.delete(req, res);
});
router.post("/insert", function(req, res) {
    user.insert(req, res);
});

router.post("/addAPI", function(req, res) {
    user.addAPI(req, res);
});

router.post("/update", function(req, res) {
    user.update(req, res);
});

router.get("/test", function(req, res) {
    user.test(req, res);
});

router.get("/index", function(req, res) {
    user.index(req, res);
});



module.exports = router;
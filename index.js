var express = require("express");
// var http = require("http");
var bodyParser = require("body-parser");

var path = require("path");
var swig = require("swig");
var app = express();
// var router = express.Router();
var router = require("./router/router.js");
var user = require("./router/user.js");

var swig = require('swig');
app.engine('tpl', swig.renderFile);

app.set('views', './views');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'tpl');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// app.set('public', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", router);


// app.post("/queryById", function(req, res) {
//     console.log(req.body);  
//     res.json({
//         a: 111
//     })
// });


// app.post("/queryById", user.queryById);

// app.get("/", function(req, res) {
//     res.render("index.tpl");
// });

// app.get("/add", function(req, res) {
//     res.render("add.tpl");
// });







var server = app.listen(3000, function() {
    console.log("启动3000端口！");
});
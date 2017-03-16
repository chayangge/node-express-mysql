var mysql = require("mysql");
var conf = require("../sql-conf/conf.js");
var $sql = require("../sql-conf/sqlMap.js");
// console.log(conf)
// var pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "110",
//     database: "firstDB"
// });
var pool = mysql.createPool(conf.mysql);

var rend = function(res, page, data) {
    if (!data) {
        res.render(page);
    } else {
        res.render(page, data);
        // res.send("接口出错")
    }
}

module.exports = {
    all: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query("select * from user", function(error, result) {
                var data = {};
                data.result = result;
                connection.release();
                rend(res, "index.tpl", data);
            });
        });
        // rend(res, "index.tpl");
    },
    show: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query("select * from user", function(error, result) {
                res.send(result);
            });
        });
    },
    add: function(req, res, next) {
        rend(res, "add.tpl");
    },
    addAPI: function(req, res, next) {
        var param = req.body || req.query;
        var name = req.query.name,
            age = req.query.age;
        pool.getConnection(function(err, connection) {
            connection.query($sql.insert, [param.name, param.age], function(err, result) {
                // rend(res, "add.tpl", result);
                res.send(result);
                connection.release();
            });
        });
    },
    delete: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            var id = +req.body.id;
            connection.query($sql.delete, id, function(err, result) {
                if (result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg: '删除成功'
                    };
                } else {
                    result = void 0;
                }
                res.send(result);

                connection.release();
            });
        });
    },
    queryById: function(req, res, next) {
        var param = req.body || req.query;
        var id = +param.id; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryById, id, function(err, result) {
                var data = {};
                console.log(result)
                data.result = result;
                res.send(result);
                // rend(res, "add.tpl", data);
                connection.release();

            });
        });
    },
    update: function(req, res, next) {
        // console.log(param)
        var param = req.body || req.query;
        // var id = +param.id;
        console.log(param)
        pool.getConnection(function(err, connection) {
            connection.query($sql.update, [+param.id, param.name, param.age], function(err, result) {
                console.log(result)
                var data = {};
                data.result = result;
                res.send(result);
                // rend(res, "add.tpl", data);
                connection.release();

            });
        });
    },
    insert: function(req, res, next) {
        // console.log(param)
        var param = req.body || req.query;
        // var id = +param.id;
        console.log(param)
        pool.getConnection(function(err, connection) {
            connection.query($sql.insert, [param.name, param.age], function(err, result) {
                console.log(result)
                var data = {};
                data.result = result;
                res.send(result);
                // rend(res, "add.tpl", data);
                connection.release();

            });
        });
    },
    update: function(req, res, next) {
        var param = req.body || req.query;
        // var id = +param.id;
        // var name = param.name;
        // var age = param.age;
        pool.getConnection(function(err, connection) {
            connection.query($sql.update, [param.name, param.age, +param.id], function(err, result) {
                var data = {};
                data.result = result;
                res.send(result);
                // rend(res, "add.tpl", data);
                connection.release();

            });
        });
    }
}
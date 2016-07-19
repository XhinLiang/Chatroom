'use strict'
var users = require('../component/users');
module.exports = function(app) {
    app.get('/signin', function(req, res) {
        res.sendfile('./views/signin.html');
    });
    app.post('/signin', function(req, res) {
        if (users[req.body.name]) {
            //存在，则不允许登陆
            res.redirect('/signin');
        } else {
            //不存在，把用户名存入 cookie 并跳转到主页
            res.cookie("user", req.body.name, {
                maxAge: 1000 * 60 * 60 * 24 * 30
            });
            res.redirect('/');
        }
    });
};

'use strict'
module.exports = function(app) {
    app.get('/', function(req, res) {
        if (req.cookies.user == null) {
            res.redirect('/signin');
        } else {
            res.sendfile('./views/index.html');
        }
    });
};

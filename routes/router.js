'use strict'
let index = require('./index');
let signin = require('./signin');
module.exports.route = function(app) {
    index(app);
    signin(app);
};

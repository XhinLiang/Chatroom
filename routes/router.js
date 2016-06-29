'use strict'
let index = require('./index');
let signin = require('./signin');
module.exports = function(app) {
    index(app);
    signin(app);
};

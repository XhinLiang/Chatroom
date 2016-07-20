'use strict';
var app = require('./component/app');
var router = require('./routes/router');
var http = require('http');
var server = http.createServer(app);
var socket = require('./component/socket');

socket.route(server);
router.route(app);

server.listen(app.get('port'), function() {
    console.log('Express  start ' + app.get('port'));
});

var app = require('./models/app');
var router = require('./routes/router');
var http = require('http');

var server = http.createServer(app);
var socket = require('./models/socket');
socket(server);
router(app);

server.listen(app.get('port'), function() {
    console.log('Express  start ' + app.get('port'));
});

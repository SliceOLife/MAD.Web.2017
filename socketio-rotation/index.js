var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log('Got a new client connection');
});

server.listen(3000, function() {
    console.log('Listening on *:3000');
});
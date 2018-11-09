
var express = require('express'); //Express main framework
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
var port = process.env.PORT || 3838;

require('./app/routes.js')(app,io); 

server.listen(port);
console.log('Server is running');



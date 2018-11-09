
var express = require('express'); //Express main framework
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 3838;

require('./app/routes.js')(app,io); 

server.listen(PORT);
console.log('Server is running');





const connections = [];


module.exports = function (app,io) {


	io.sockets.on('connection',(socket) => {
		connections.push(socket);
		console.log(' %s sockets is connected', connections.length);
	 
		socket.on('disconnect', () => {
		   connections.splice(connections.indexOf(socket), 1);
		});
	 
		socket.on('sending message', (message) => {
		   console.log('Message is received :', message);
	 
		   io.sockets.emit('new message', {message: message});
		});
	 });
	 
	
	io.on('connection', function (socket) {
		socket.emit('news', { hello: 'world' });
		socket.on('my other event', function (data) {
			console.log(data);
		});
	});
	

	let log = "Log: ";
	// Index
	app.get('/', function (req, res) {



		res.render('index.ejs', {
			message: 'Hello Node World',
			log: log
		});
	});


	app.post('/', function (req, res) {

		run(cmd.step_4).then((resolve) => {


		}).catch(function (reject) {


		});

	});


	app.get('/success', function (req, res) {

		res.render('index.ejs', {
			message: 'SUCCESS',
			log: log
		});
	});

	app.get('/failed', function (req, res) {

		res.render('index.ejs', {
			message: 'FAILED',
			log: log
		});
	});



}

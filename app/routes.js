
const cmd = require('./delays');

const connections = [];

module.exports = function (app, io) {

	/*
		io.sockets.on('connection', (socket) => {
			connections.push(socket);
			console.log(' %s sockets is connected', connections.length);
	
			socket.on('disconnect', () => {
				connections.splice(connections.indexOf(socket), 1);
			});
	
			socket.on('sending message', (message) => {
				console.log('Message is received :', message);
	
				io.sockets.emit('new message', { message: message });
			});
		});
	*/


	// Index
	app.get('/', function (req, res) {

		res.render('index.ejs', {
			message: 'Hello Node World',
		});
	});

	app.post('/', function (req, res) {


		var log = "";
		io.sockets.emit('new message', { message: "Started" });

		cmd.function_step_1().then((resolve) => {

			log = "First Step OK";
			console.log(log);
			io.sockets.emit('new message', { message: log });

			cmd.function_step_2().then((resolve) => {

				log = "Second Step OK";
				console.log(log);
				io.sockets.emit('new message', { message: log });

				cmd.function_step_3().then((resolve) => {

					log = "Final Step OK";
					console.log(log);
					io.sockets.emit('new message', { message: log });

				}).catch(function (reject) {

					log = "Final Step FAIL";
					console.log(log);
					io.sockets.emit('new message', { message: log });

				});

			}).catch(function (reject) {

				log = "Second Step FAIL";
				console.log(log);
				io.sockets.emit('new message', { message: log });

			});

		}).catch(function (reject) {

			log = "First Step FAIL";
			console.log(log);
			io.sockets.emit('new message', { message: log });

		});
	});



}


/*
			
*/

const cmd = require('./commands');


module.exports = function (app) {

	let log = "Log: ";
	// Index
	app.get('/', function (req, res) {

		res.render('index.ejs', {
			message: 'Hello Node World',
			log: log
		});
	});


	app.post('/', function (req, res) {

		run(cmd.step_1).then((resolve) => {
			console.log("stdout :\n", resolve);
			log += ("< Folder Created >");
			console.log(log);
			socketio.emit('log', log);
			run(cmd.step_2).then((resolve) => {
				console.log("stdout :\n", resolve);
				log += ( "< Inside new Folder  >");
				console.log(log);
				socketio.emit('log', log);
				run(cmd.step_3).then((resolve) => {
					console.log("stdout :\n", resolve);
					log += ( "< New File Created >");
					console.log(log);
					socketio.emit('log', log);
					run(cmd.step_4).then((resolve) => {
						console.log("stdout :\n", resolve);
						log += ( "< Backup File Created >" );
						socketio.emit('log', log);
						res.redirect('/success');
			
					}).catch(function (reject) {
						console.log(reject);
						log += ( '<' +  reject + ' > ');
						res.redirect('/failed');
					
					});
		
				}).catch(function (reject) {
					console.log(reject);
					log += ( '<' +  reject + ' > ');
					res.redirect('/failed');
				
				});
	
			}).catch(function (reject) {
				console.log(reject);
				log += ( '<' +  reject + ' > ');
				res.redirect('/failed');
			
			});

		}).catch(function (reject) {
			console.log(reject);
			log += ( ' < ' +  reject + ' > ');
			res.redirect('/failed');
		
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

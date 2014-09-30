//app.js

	// set up =======
	var express = require('express');
	var path = require('path');
	var bodyParser = require('body-parser');

	var app = express();

	app.set('port', process.env.PORT || 3000);
	app.use(bodyParser.urlencoded({'extended': 'true'}));
	app.use(bodyParser.json());
	app.use(express.static(path.join(__dirname, 'public')));
	
	//


	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

	app.listen(app.get('port'), function() {
		console.log('App listening on port ' + app.get('port'));
	});

	

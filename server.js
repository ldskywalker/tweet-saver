//app.js

	// set up =======
	var express = require('express');
	var path = require('path');
	var bodyParser = require('body-parser');
	var errorhandler = require('errorhandler');
	var routes = require('./routes');

	var app = express();

	app.set('port', process.env.PORT || 3030);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(bodyParser.urlencoded({'extended': 'true'}));
	app.use(bodyParser.json());
	app.use(express.static(path.join(__dirname, 'public')));
	
	//
	var env = process.env.NODE_ENV || 'development';
	// for dev
	if ('development' === env) {
		app.use(errorhandler());
	}
	// for production
	if ('production' === env) {
		// TODO
	}

	app.get('/', routes.index);

	app.listen(app.get('port'), function() {
		console.log('App listening on port ' + app.get('port'));
	});

	

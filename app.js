var express = require('express')
	, app = express()
	, cons = require('consolidate')
	, routes = require('./routes');


	app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');    

     // Application routes
    routes(app);

    app.listen(3000);
    console.log('Express server listening on port 3000');
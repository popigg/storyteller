'use strict';

/**
 * required modules
 * @type {*}
 */
var mongoose    = require('mongoose');
var express     = require('express');
var app         = express();
var router      = express.Router();
var cons        = require('consolidate');
var routes      = require('./routes/storiesHandler.js');
var bodyParser  = require('body-parser');

/**
 * MongoDb connection
 */
mongoose.connect('mongodb://localhost/storyTeller');
mongoose.connection.on('error', function() {
    console.error('MongoDB connection error.');
});


/**
 * express configuration
 */
app.use(bodyParser.json());
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

router.use('./routes/storiesHandler.js', router);

 // Application routes
routes(app);

app.listen(3000);
console.log('Express server listening on port 3000');
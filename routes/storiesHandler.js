'use strict';

var storiesController = require('../controller/storiesController.js');

module.exports = function(router) {

	router.route('/story/:id')
        .get(storiesController.getStory);
}

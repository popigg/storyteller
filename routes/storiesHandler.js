'use strict';

var storiesController = require('../controller/storiesController.js');
var userController = require('../controller/userController.js');

module.exports = function(router) {

	router.route('/story/:id')
        .post(storiesController.createStory)
        .get(storiesController.getStory)
        .put(storiesController.updateStory)
        .remove(storiesController.removeStory);
}

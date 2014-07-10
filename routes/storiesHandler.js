'use strict';

var storiesController = require('../controllers/storiesController.js');
var userController = require('../controllers/authorsController.js');

module.exports = function(router) {

	router.route('/story/:id')
        .get(storiesController.getStory)
        .put(storiesController.updateStory)
        .delete(storiesController.removeStory);

    router.route('/story')
        .post(storiesController.createStory);

}

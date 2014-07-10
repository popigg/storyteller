'use strict';

var storiesController = require('../controllers/storiesController.js');
var authorsController = require('../controllers/authorsController.js');

module.exports = function(router) {

	router.route('/story/:id')
        .get(storiesController.getStory)
        .put(storiesController.updateStory)
        .delete(storiesController.removeStory);

    router.route('/story')
        .post(storiesController.createStory);

    router.route('/author/:id')
        .get(authorsController.getAuthor)
        .put(authorsController.updateAuthor)
        .delete(authorsController.removeAuthor);

    router.route('/author')
        .post(authorsController.createAuthor);

}

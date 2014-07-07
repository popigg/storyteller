'use strict';

var Story = require('../models/story.js');

exports.createStory = function(req, res) {
    Story.create(req.body, function(error, story) {
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story);
    });
};

exports.getStories = function(req, res) {

};

exports.getStory = function(req, res) {

};

exports.updateStory = function(req, res) {

};

exports.removeStory = function(req, res) {

};
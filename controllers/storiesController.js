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

exports.getStory = function(req, res) {
    Story.findById(req.param.Id, function(error, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story)
    });
};

exports.updateStory = function(req, res) {
    Story.findOneAndUpdate(req.params.Id, req.body, function(errror, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story);
    });
};

exports.removeStory = function(req, res) {
    Story.findOneAndRemove(req.params.Id, function(errror, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story);
    });
};

exports.getStories = function(req, res) {
    Story.find(function(error, stories) {
       if (error) {
           res.send(501, error);
           return;
       }

       res.send(stories);
    });
};

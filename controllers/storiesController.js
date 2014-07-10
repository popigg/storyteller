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
    console.log(req.params.id);
    Story.findById(req.params.id, function(error, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story)
    });
};

exports.updateStory = function(req, res) {
    Story.findOneAndUpdate(req.params.id, req.body, function(error, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story);
    });
};

exports.removeStory = function(req, res) {
    Story.findOneAndRemove(req.params.id, function(errror, story){
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

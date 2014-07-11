'use strict';

var Story   = require('../models/story.js');
var Author  = require('../models/author.js');

exports.createStory = function(req, res) {
    Author.create(req.body.author, function(error, author) {
        if (error) {
            res.send(501, error);
            return;
        }
        req.body.story.author = author._id;

        Story.create(req.body.story, function(error, story) {
            if (error) {
                res.send(501, error);
                return;
            }

            res.send(story);
        });
    });
};

exports.getStory = function(req, res) {
    Story.findById(req.params.id)
        .populate('author')
        .exec(function(error, story) {
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

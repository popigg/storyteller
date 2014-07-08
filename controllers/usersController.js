'use strict';

var User = require('../models/user.js');

exports.createUser = function(req, res) {
    User.create(req.body, function(error, story) {
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story);
    });
};

exports.getUser = function(req, res) {
    User.findById(req.param.Id, function(error, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story)
    });
};

exports.updateUser = function(req, res) {
    User.findOneAndUpdate(req.params.Id, req.body, function(errror, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story);
    });
};

exports.removeUser = function(req, res) {
    User.findOneAndRemove(req.params.Id, function(errror, story){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(story);
    });
};

exports.getUsers = function(req, res) {
    User.find(function(error, stories) {
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(stories);
    });
};


'use strict';

var Author = require('../models/author.js');

exports.createUser = function(req, res) {
    Author.create(req.body, function(error, author) {
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author);
    });
};

exports.getUser = function(req, res) {
    Author.findById(req.param.Id, function(error, author){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author)
    });
};

exports.updateUser = function(req, res) {
    Author.findOneAndUpdate(req.params.Id, req.body, function(errror, author){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author);
    });
};

exports.removeUser = function(req, res) {
    Author.findOneAndRemove(req.params.Id, function(errror, author){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author);
    });
};

exports.getUsers = function(req, res) {
    Author.find(function(error, authors) {
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(authors);
    });
};


'use strict';

var Author = require('../models/author.js');

exports.createAuthor = function(req, res) {
    Author.create(req.body, function(error, author) {
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author);
    });
};

exports.getAuthor = function(req, res) {
    Author.findById(req.param.Id, function(error, author){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author)
    });
};

exports.updateAuthor = function(req, res) {
    Author.findOneAndUpdate(req.params.Id, req.body, function(errror, author){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author);
    });
};

exports.removeAuthor = function(req, res) {
    Author.findOneAndRemove(req.params.Id, function(errror, author){
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(author);
    });
};

exports.getAuthors = function(req, res) {
    Author.find(function(error, authors) {
        if (error) {
            res.send(501, error);
            return;
        }

        res.send(authors);
    });
};


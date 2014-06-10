"use strict";

var Extra = require('./extra_model.js'),
    Q    = require('q');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Extra.find, Extra);
    $promise()
      .then(function (extrastuff) {
        res.json(extrastuff);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  post: function (req, res, next) {
    var extrathing = req.body.extra;
    var $promise = Q.nbind(Extra.create, Extra);
    $promise(extrathing)
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
};
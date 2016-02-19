/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var utilityService = require('../services/UtilityService');
var _ = require('lodash');

module.exports = {

  cache: function(req, res) {

    sails.log.info('request method: ' + req.method);
    sails.log.info('request protocol: ' + req.protocol);
    sails.log.info('request url: ' + req.url);
    sails.log.info('request path: ' + req.path);

    try {
      // methods return promises
      utilityService.get('/posts', req.params).then(function (data) {
        "use strict";
        _(data.data).forEach(function(value) {
          var obj = Post.map(value);

          Post.create(obj)
            .then(function(data) {
              res.ok();
            })
            .catch(function(error) {
              sails.log.error(error);
              res.serverError();
            })
        })
      })
    } catch (error) {
      sails.log.error(error);
      res.serverError();
    }
  }

};


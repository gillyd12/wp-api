/**
 * UserController
 *
 * @description :: Server-side logic for managing users
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
      utilityService.get('/users', req.params).then(function (data) {
        "use strict";
        _(data.data).forEach(function(value) {
          var obj = User.map(value);
          sails.log.info('name was set: ' + obj.name);

          User.create(obj)
            .then(function(data) {
              console.log('Created post with name ' + data.name);
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


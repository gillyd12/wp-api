/**
 * Created by bryangill on 2/14/16.
 */
var utilityService = require('../services/UtilityService');

module.exports = {
  get: function (req, res) {

    sails.log.info('request method: ' + req.method);
    sails.log.info('request protocol: ' + req.protocol);
    sails.log.info('request url: ' + req.url);
    sails.log.info('request path: ' + req.path);

    try {
      // methods return promises
      utilityService.get(req.path, req.params).then(function (data) {
        "use strict";
        res.json(data.data);
      })
    } catch (error) {
      sails.log.error(error);
      res.json("404");
    }
  },

  cache: function (req, res) {

    sails.log.info('request method: ' + req.method);
    sails.log.info('request protocol: ' + req.protocol);
    sails.log.info('request url: ' + req.url);

    try {
      // methods return promises

      utilityService.get(req.path, req.params).then(function (data) {
        "use strict";
        res.json(data.data);
      })
    } catch (error) {
      sails.log.error(error);
      res.json("404");
    }
  }

};

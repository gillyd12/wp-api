/**
 * BlogSummaryController
 *
 * @description :: Server-side logic for managing Blogsummaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var utilityService = require('../services/UtilityService');

module.exports = {

  posts: function (req, res) {

    sails.log.info('request method: ' + req.method);
    sails.log.info('request protocol: ' + req.protocol);
    sails.log.info('request url: ' + req.url);

    try {

      // methods return promises
      utilityService.invoke(req.path, req.params).then(function (data) {
        "use strict";
        res.json(data.data);
      })

    } catch (error) {
      sails.log.error(error);
      res.json("404");
    }

  }

};


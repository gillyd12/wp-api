/**
 * BlogSummaryController
 *
 * @description :: Server-side logic for managing Blogsummaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var postsService = require('../services/PostsService');

module.exports = {
  posts: function (req, res) {
    sails.log.info('request method: ' + req.method);
    sails.log.info('request protocol: ' + req.protocol);
    sails.log.info('request url: ' + req.url);

    try {
      postsService.get().then(function (data) {
        "use strict";
        res.json(data.data);
      })
    } catch (error) {
      sails.log.error(error);
    }
  }
};


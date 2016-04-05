/**
 * Created by bryangill on 4/5/16.
 */
var cacheService = require('../services/CacheService');

module.exports = {

  cache: function(req, res) {

    try {
      cacheService.populate(Comment);
      res.ok();
    } catch (error) {
      sails.log.error(error);
      res.serverError();
    }

  }

};

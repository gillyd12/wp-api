/**
 * Created by bryangill on 4/9/16.
 */
var cacheService = require('../services/CacheService');

module.exports = {

  cache: function(req, res) {

    try {
      cacheService.populate(Media);
      res.ok();
    } catch (error) {
      sails.log.error(error);
      res.serverError();
    }

  }

};

/**
 * Created by bryangill on 3/31/16.
 */
var cacheService = require('../services/CacheService');

module.exports = {

  cache: function(req, res) {

    try {
      cacheService.populate(Category);
      res.ok();
    } catch (error) {
      sails.log.error(error);
      res.serverError();
    }

  }

};

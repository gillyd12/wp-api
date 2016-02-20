/**
 * TagController
 *
 * @description :: Server-side logic for managing tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var cacheService = require('../services/CacheService');

module.exports = {

  cache: function(req, res) {

    try {
      cacheService.load(Tag);
      res.ok();
    } catch (error) {
      sails.log.error(error);
      res.serverError();
    }

  }

};



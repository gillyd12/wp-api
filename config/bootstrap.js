/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var cacheService = require("../api/services/CacheService");

module.exports.bootstrap = function(cb) {

  // pre-caching data
  sails.on('lifted', function() {
    try {
      cacheService.reload(Post);
      cacheService.reload(Tag);
      cacheService.reload(User);
      cacheService.reload(Category);
      cacheService.reload(Comment);
      cacheService.reloadEncodedData(Media);
    } catch (error) {
      sails.log.error(error);
    }
  });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};

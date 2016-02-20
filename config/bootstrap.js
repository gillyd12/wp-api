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

var rest = require('restling');

module.exports.bootstrap = function(cb) {

  //var url = process.env.CACHE_URL + ':' + process.env.API_PORT;
  //var options = {};
  //
  //sails.on('lifted', function() {
  //  // Your post-lift startup code here
  //  try {
  //    rest.post(url + '/posts/cache', {});
  //    //rest.post(url + '/tags/cache', options);
  //    //rest.post(url + '/users/cache', options);
  //  } catch (error) {
  //    sails.log.error(error);
  //  }
  //});
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};

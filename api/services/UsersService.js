var rest = require('restling');
var util = require('./UtilityService');

var posts;
var resource = util.getRoot() + '/users/';

module.exports = {

  get: function (id) {
    try {
      return rest.get(resource + id);
    } catch (error) {
      sails.log.error(error);
    }
  }
};

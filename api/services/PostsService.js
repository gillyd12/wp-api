var rest = require('restling');
//var t = require('traverse');
var util = require('./UtilityService');

var posts;
var resource = util.getRoot() + '/posts/';

module.exports = {

  get: function () {
    try {
      return rest.get(resource);
    } catch (error) {
      sails.log.error(error);
    }
  }

};

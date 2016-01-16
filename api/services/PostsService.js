var rest = require('restling');
//var t = require('traverse');
var util = require('./UtilityService');

var posts;
var resource = util.getRoot() + '/posts/';

module.exports = {

  get: function () {
    rest.get(resource).then(function(result){
      posts = result.data;
    }, function(error){
      console.log(error.message);
    });

    return posts;
  }

};

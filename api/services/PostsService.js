var rest = require('restling');
var posts;
var root_service_url = process.env.ROOT_URL + '/posts/';

module.exports = {

  get: function (params) {
    var url = root_service_url;
    // returns all posts if title is not provided.
    // params: title, sortOrder, quantity
    if (params.title) {
      url = root_service_url + params.title;
      // query model or wp-api for title
    }

    rest.get(url).then(function(result){
      posts = result.data;
    }, function(error){
      console.log(error.message);
    });

    return posts;
  }

};

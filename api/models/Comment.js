/**
 * Created by bryangill on 4/5/16.
 */
module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },
    post_id: {
      type: 'integer',
      primaryKey: false,
      unique: false
    },
    description: {
      type: 'string'
    },
    author_name: {
      type: 'string'
    },
    date: {
      type: 'datetime'
    },

  },

  map: function (a, res, api_model) {
    "use strict";

    var promise = new Promise(function (resolve, reject) {

      var obj = {
        id: api_model.id,
        post_id: api_model.post,
        description: api_model.content.rendered,
        author_name: api_model.author_name,
        date: api_model.date
      }

      res.model = obj;
      resolve(res);
      
    });
    return promise;
  },

  path: function () {
    "use strict";
    return '/comments';
  }

};

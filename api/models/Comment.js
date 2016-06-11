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

  map: function (api_model) {
    "use strict";
    try {

      var obj = {
        id: api_model.id,
        post_id: api_model.post,
        description: api_model.content.rendered,
        author_name: api_model.author_name,
        date: api_model.date
      }

    } catch (error) {
      sails.log.error(error);
    }

  },

  path: function () {
    "use strict";
    return '/comments';
  }

};

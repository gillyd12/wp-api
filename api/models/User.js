/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },
    name: {
      type: 'string'
    },
    image: {
      type: 'string'
    }
  },

  map: function (api_model) {
    "use strict";

    try {

      var obj = {
        id: api_model.id,
        name: api_model.name,
        image: api_model.avatar_urls['96']
      }
    } catch (error) {
      sails.log.error(error);
    }
  },

  path: function () {
    "use strict";
    return '/users';
  }

};


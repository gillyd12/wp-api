/**
* Tag.js
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
    count: {
      type: 'integer'
    },
    description: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  },

  map: function(api_model) {
    "use strict";
    var obj = {
      id: api_model.id,
      count: api_model.count,
      description: api_model.description,
      name: api_model.name
    }
    return obj;
  }

};


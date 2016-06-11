/**
 * Created by bryangill on 4/9/16.
 */

var util = require('../services/UtilityService');

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },
    guid: {
      type: 'string'
    },
    media_details: {
      type: 'json'
    }
  },

  map: function (model, api_model) {

    "use strict";

    try {

      util.base64encode(api_model.guid.rendered).then(function (data) {
        if (data) {
          var obj = {
            id: api_model.id,
            guid: data,
            media_details: api_model.media_details
          }
          model.create(obj)
            .then(function (data) {
              sails.log.info("ID of " + model.path() + " has been loaded: " + data.id);
            })
            .catch(function (error) {
              sails.log.error(error);
            });
        }
      })

    } catch (error) {
      sails.log.error(error);
    }
  },

  path: function () {
    "use strict";
    return '/media';
  }

};

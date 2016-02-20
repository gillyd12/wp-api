/**
 * Created by bryangill on 2/16/16.
 */

var utilityService = require('../services/UtilityService');

module.exports = {

  load: function (model) {

    try {
      utilityService.get(model.path()).then(function (data) {
        "use strict";
        _(data.data).forEach(function (value) {
          var obj = model.map(value);

          model.create(obj)
            .then(function (data) {
              sails.log.info("ID of " + model.path() + " has been loaded: " + data.id);
            })
            .catch(function (error) {
              sails.log.error(error);
            })
        })
      })
    } catch (error) {
      sails.log.error(error);
    }
  }
}

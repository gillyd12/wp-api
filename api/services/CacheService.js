/**
 * Created by bryangill on 2/16/16.
 */

var utilityService = require('../services/UtilityService');
var _ = require('lodash');

module.exports = {

  destroy: function (model) {
    "use strict";

    try {

      model.destroy()
        .then(function (data) {
          sails.log.info(model.path() + " destroyed");
        })
        .catch(function (error) {
          sails.log.error(error);
        });
    } catch (error) {
      sails.log.error(error);
    }
  },

  populate: function (model) {

    try {
      utilityService.get(model.path()).then(function (data) {
        "use strict";
        var newRecords = data;

        _(newRecords.data).forEach(function (value) {
            // sails.log.info("I went into new records id: " + value.id);
            var a;
            var res = {};
            model.map(a, res, value).then(function(data) {
              model.create(data.model)
                .then(function (data) {
                  sails.log.info("ID of " + model.path() + " has been loaded: " + data.id);
                })
                .catch(function (error) {
                  sails.log.error(error);
                });
            })
          })
        })

    } catch (error) {
      sails.log.error(error);
    }
  },

  populateEncodedData: function (model) {
    "use strict";
    try {
      utilityService.get(model.path()).then(function (data) {
        "use strict";
        var newRecords = data;

        _(newRecords.data).forEach(function (value) {
          model.map(model, value);
        })
      })

    } catch (error) {
      sails.log.error(error);
    }

  },

  reload: function (model) {
    "use strict";
    try {
      this.destroy(model);
      this.populate((model));
    } catch (error) {
      sails.info.error(error);
    }
  },

  reloadEncodedData: function (model) {
    "use strict";
    try {
      this.destroy(model);
      this.populateEncodedData((model));
    } catch (error) {
      sails.info.error(error);
    }
  }


}

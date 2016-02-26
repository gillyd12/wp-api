/**
 * Created by bryangill on 2/16/16.
 */

var utilityService = require('../services/UtilityService');
var _ = require('lodash');

module.exports = {

  //      //// update title
  //      //model.update({id: record.id}, {title: obj.title})
  //      //.then(function (data) {
  //      //  sails.log.info('updated: ' + data[0].id);
  //      //}).catch(function(update_error) {
  //      //  sails.log.error(update_error);
  //      //});

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
          var obj = model.map(value);

          model.create(obj)
            .then(function (data) {
              sails.log.info("ID of " + model.path() + " has been loaded: " + data.id);
            })
            .catch(function (error) {
              sails.log.error(error);
            });

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
  }

}

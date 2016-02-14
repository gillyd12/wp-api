/**
 * Created by bryangill on 2/14/16.
 */
var utilityService = require('../services/UtilityService');

module.exports = {
  tags: function (req, res) {

    // return specific user
    if (req.param('id')) {
      try {

        // methods return promises
        utilityService.invoke(req.path, req.params).then(function (data) {
          "use strict";
          res.json(data.data);
        })
      } catch (error) {
        sails.log.error(error);
      }
    }
  }
};

/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var utilityService = require('../services/UtilityService');

module.exports = {
  users: function (req, res) {

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
    } else {
      // return all users
    }
  }
};


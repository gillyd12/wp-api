/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var usersService = require('../services/UsersService');

module.exports = {
  users: function (req, res) {

    // return specific user

    if (req.param('id')) {
      try {
        usersService.get(req.param('id')).then(function (data) {
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


/**
 * Created by bryangill on 1/16/16.
 */

var rest = require('restling');
var _ = require('lodash');

var root = process.env.ROOT_URL;

module.exports = {

  getRoot: function () {
    "use strict";
    return root;
  },

  get: function (path, params) {
    "use strict";

    var url = this.getRoot() + path;

    sails.log.info('Retrieving API data at: ' + url);
    var options = {
      query: params
    };

    try {
      return rest.get(url, options);
    } catch (error) {
      sails.log.error(error);
    }

  },

  formatExcerpt(excerpt) {
    "use strict";
    var value = _.truncate(excerpt, {
      'length': 200,
      'separator': /.? +/
    });
    return this.removeHtmlChar(value);

  },

  removeHtmlChar (text) {
    "use strict";
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';

  }
  //return _.words(excerpt);
};

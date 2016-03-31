/**
 * Created by bryangill on 1/16/16.
 */

var rest = require('restling');
var _ = require('lodash');

// todo refactor the use of environment vars -- use req
var root = process.env.ROOT_URL;
var api_domain = process.env.API_DOMAIN;
var prod_host_url = process.env.PROD_URL;

module.exports = {

  getRoot: function () {
    "use strict";
    return root;
  },

  getProdHostURL: function() {
    "use strict";
    return prod_host_url;
  },

  get: function (path, params) {
    "use strict";

    var url = this.getRoot() + path;

    sails.log.info('Retrieving API data at: ' + this.getRoot());
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

  formatLink(link) {
    "use strict";
    return _.replace(link, api_domain, prod_host_url + "/blog");
  },

  removeHtmlChar (text) {
    "use strict";
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
};

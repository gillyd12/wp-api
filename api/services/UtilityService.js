/**
 * Created by bryangill on 1/16/16.
 */

var rest = require('restling');
var _ = require('lodash');
var base64 = require('node-base64-image');

// todo refactor the use of environment vars -- use req
var root = process.env.ROOT_URL;
var api_domain = process.env.API_DOMAIN;
var prod_host_url = process.env.PROD_URL;

module.exports = {

  getRoot: function () {
    "use strict";
    return root;
  },

  getProdHostURL: function () {
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

  formatExcerpt: function (excerpt) {
    "use strict";
    var value = _.truncate(excerpt, {
      'length': 200,
      'separator': /.? +/
    });
    return this.removeHtmlChar(value);

  },

  formatLink: function (link) {
    "use strict";
    return _.replace(link, api_domain, prod_host_url + "/blog");
  },

  removeHtmlChar: function (text) {
    "use strict";
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  },

  base64encode: function (media) {
    "use strict";

    var options = {string: true};

    var promise = new Promise(function(resolve, reject) {

      base64.base64encoder(media, options, function (err, image) {
        if (err) {
          sails.log.error(err);
        }
        if (image) {
          resolve(image);
        } else {
          reject('failure');
        }
      })

    });
    return promise;
  }
};

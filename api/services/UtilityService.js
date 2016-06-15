/**
 * Created by bryangill on 1/16/16.
 */

var rest = require('restling');
var _ = require('lodash');
var base64 = require('node-base64-image');
var media = require('../models/Media');

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

  getMediaFileId: function (media_file_name) {
    "use strict";
    var self = this;

    var slug = media_file_name + '-details';

    var promise = new Promise(function (resolve, reject) {

      try {
        self.get(media.path()).then(function (data) {
          var post_media_id = 0;
          _(data.data).forEach(function (value) {
            if (value.slug == slug) {
              post_media_id = value.id;
            }
          });
          // if (post_media_id != 0) {
          //   sails.log.info("resolving post_media_id: " + post_media_id)
            resolve(post_media_id);
          // }
        });
      } catch (error) {
        sails.log.error(error);
      }
    });

    return promise;
  },

  getPostMedia: function (media_id) {
    var self = this;
    "use strict";

    var media_url = media.path() + "/" + media_id;

    var promise = new Promise(function (resolve, reject) {

      if (media_id != '0') {
        try {
          self.get(media_url).then(function (data) {
            self.getMediaFileId(data.data.slug).then(function (data) {
              // sails.log.info('return post_media: ' + data);
              // if (data) {
              //   sails.log.info("resolving data: " + data)
                resolve(data);
              // }

            })
          });
        } catch (error) {
          sails.log.error(error);
        }
      }
    })
    return promise;
  },

  getSubHeading: function (text) {
    "use strict";
    var start = text.lastIndexOf("subheading") + 12;
    var end = text.lastIndexOf("<");

    return text ? String(text).substring(start, end) : '';
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

    var promise = new Promise(function (resolve, reject) {

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

/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var util = require('../services/UtilityService');

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true
    },
    featured_media_id: {
      type: 'integer',
      primaryKey: false,
      unique: false
    },
    post_media_id: {
      type: 'json',
      primaryKey: false,
      unique: false
    },
    title: {
      type: 'string'
    },
    excerpt: {
      type: 'string'
    },
    author: {
      type: 'string'
    },
    published_date: {
      type: 'datetime'
    },
    modified_date: {
      type: 'datetime'
    },
    tags: {
      type: 'array'
    },
    categories: {
      type: 'array'
    },
    slug: {
      type: 'string'
    },
    link: {
      type: 'string'
    }
  },

  getPostMediaId: function (id) {

    var promise = new Promise(function (resolve, reject) {

      try {
        util.getPostMedia(id).then(function (data) {
          // sails.log.info("im in post: " + data);
          // return data;
          // if (data) {
            resolve(data);
          // }
        })
      }
      catch (error) {
        sails.log.error(error);
      }
    });

    return promise;
  },

  map: function (a, res, api_model) {

    var self = this;
    "use strict";

    var promise = new Promise(function (resolve, reject) {

      try {
        self.getPostMediaId(api_model.featured_media).then(function (data) {
          var obj = {
            id: api_model.id,
            featured_media_id: api_model.featured_media,
            post_media_id: data,
            title: api_model.title.rendered,
            content: api_model.content.rendered,
            excerpt: util.formatExcerpt(api_model.excerpt.rendered),
            subheading: util.getSubHeading(api_model.content.rendered),
            author: api_model.author,
            published_date: api_model.date,
            modified_date: api_model.modified,
            tags: api_model.tags,
            categories: api_model.categories,
            slug: api_model.slug,
            link: util.formatLink(api_model.link)
          };
          if(obj) {
            // sails.log.info("mapping");
            // sails.log.info('value of obj.post_media_id: ' + obj.post_media_id);
            res.model = obj;
            // sails.log.info('res.model: ' + res.model);
            resolve(res);
          }
        })
      }
      catch (error) {
        sails.log.error(error);
      }
    });

    return promise;
  },

  path: function () {
    "use strict";
    return '/posts';
  }

};


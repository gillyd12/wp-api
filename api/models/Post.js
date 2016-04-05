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

  map: function(api_model) {
    "use strict";
    var obj = {
      id: api_model.id,
      title: api_model.title.rendered,
      excerpt: util.formatExcerpt(api_model.excerpt.rendered),
      author: api_model.author,
      published_date: api_model.date,
      modified_date: api_model.modified,
      tags: api_model.tags,
      categories: api_model.categories,
      slug: api_model.slug,
      link: util.formatLink(api_model.link)
    }
    return obj;
  },

  path: function() {
    "use strict";
    return '/posts';
  }

};


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
      featured_media_id: api_model.featured_media,
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
    }
    return obj;
  },

  path: function() {
    "use strict";
    return '/posts';
  }

};


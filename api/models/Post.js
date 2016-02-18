/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

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
    tag: {
      type: 'array'
    },
    category: {
      type: 'array'
    }
  }
};


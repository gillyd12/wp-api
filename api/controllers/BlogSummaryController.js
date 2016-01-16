/**
 * BlogSummaryController
 *
 * @description :: Server-side logic for managing Blogsummaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var postsService = require('../services/PostsService');

module.exports = {
  posts: function (req, res) {
    res.json(postsService.get());
  }

};


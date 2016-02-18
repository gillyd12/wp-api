/**
 * Created by bryangill on 2/16/16.
 */
var utilityService = require('../services/UtilityService');
var cacheService = require('../services/CacheService');

module.exports = {

  loadpost: function (req, res) {

    sails.log.info('request method: ' + req.method);
    sails.log.info('request protocol: ' + req.protocol);
    sails.log.info('request url: ' + req.url);

    "use strict";
    var id = '22';

    cacheService.load(id, Post, req.params) // returns the first call promise
      .then(function (data) {
        sails.log.info(data.author);
        res.json(data);
      }).catch(function (error) {
          error.status = 404;
          sails.log.error(error);
      });

  },

  post: function (req, res) {

    sails.log.info('request method: ' + req.method);
    sails.log.info('request protocol: ' + req.protocol);
    sails.log.info('request url: ' + req.url);

    try {

      var data = {
        id: 22,
        title: 'test',
        excerpt: 'asdfasdfasdf',
        author: 'Mr Dude',
        published_date: '2016-02-14T19:12:48',
        modified_date: '2016-02-14T19:12:48',
        tag: [2],
        category: [4]
      }

      Post.create(data).exec(function createCB(err, created){
        console.log('Created post with name ' + created.author);
        res.json(created);

      });


      //  cacheService.createCache(null, Post, data).then(function (error, result) {
    //    "use strict";
    //    sails.log.info(result);
    //    res.json(result);
    //  }).catch(function (error) {
    //    "use strict";
    //    sails.log.error(error);
    //  });
    } catch (error) {
      sails.log.error(error);
      res.json("404");
    }
  }
};

/**
 * Created by bryangill on 2/16/16.
 */

module.exports = {

  load: function (id, model, params) {

    //Post.find({id:'22'}).exec(function (err, post){
    //  var data = {};
    //  "use strict";
    //  if (err) {
    //
    //  } else {
    //    data = post;
    //  }
    //  return data;
    //});
    //

    //return caching.createCache(url, Cache, result.data)
    //  .then(function (result) {
    //    return result;
    //  }).catch(function (error) {
    //    throw error;
    //  });

    // params will eventually be an array to iterate over, instead of passing url
    // this is returning a chainable deferred objected from waterline orm
    sails.log.info(id);
    return model.find({id: id});
  },

  createCache: function (url, model, data) {



    //sails.log.info(data);
    //return model.create(data);
  }

}

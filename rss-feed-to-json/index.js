const REQUEST = require('request');
const FEED = require('feed-read');

module.exports = function(ctx, cb) {
  if (!ctx.data.url) {
    return cb(new Error('Missing `URL` querystring parameter'));
  }

  REQUEST.get(ctx.data.url, function(e, r) {
    try {
      FEED.rss(r.body, cb);
    }
    catch (e) {
      cb(new Error(e));
    }
  });
};

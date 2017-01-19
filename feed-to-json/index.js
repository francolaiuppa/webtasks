const FEED = require('feed-read');

module.exports = function(ctx, cb) {
  if (!ctx.data.url) {
    return cb(new Error('Missing `URL` querystring parameter'));
  }

  FEED(ctx.data.url, cb);
};

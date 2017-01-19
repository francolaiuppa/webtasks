const FEED = require('feed-read');

module.exports = function(ctx, cb) {
  if (!ctx.data.url) {
    return cb(new Error('Missing `URL` querystring parameter'));
  }

  try {
    FEED(ctx.data.url, cb);
  }
  catch (e) {
    cb(new Error(e));
  }
};

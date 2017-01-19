const REQUEST = require('request');
const HEADERS = {
  'Content-Disposition': 'inline',
  'Content-Type': 'application/json'
};

module.exports = function(ctx, cb) {
  if (!ctx.data.url) {
    return cb(new Error('Missing `URL` querystring parameter'));
  }

  REQUEST.get(ctx.data.url, function(e, r) {
    if (e) {
      return cb(new Error(e));
    }

    var result;
    try {
      result = JSON.parse(r.body);
    }
    catch (e) {
      return cb(new Error(e));
    }

    // webtask.io compresses JSON output by default ;)
    cb(null, result);
  });
};

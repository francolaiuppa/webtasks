module.exports = function(ctx, cb) {
  if (!ctx.data.url) {
    return cb(new Error('Missing `URL` querystring parameter'));
  }

  require('request').get(ctx.data.url, function(e, r) {
    if (e) {
      return cb(e);
    }

    var result = require('crypto')
      .createHash('md5')
      .update(r.body)
      .digest('hex')
      .replace('/"/g', '');
    result = {result: result};
    return cb(null, result);
  });
};

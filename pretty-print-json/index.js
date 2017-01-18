var pd = require('pretty-data').pd;
var request = require('request');

module.exports = function(ctx, cb) {
  if (!ctx.data.url) {
    return cb(new Error('Missing `URL` querystring parameter'));
  }
  request.get(ctx.data.url, function(e, r) {
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

    //result = pd.json(result);
    cb(null, result);
  });
};

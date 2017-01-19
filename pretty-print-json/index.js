var request = require('request');
const HEADERS = {
  'Content-Disposition': 'inline',
  'Content-Type': 'application/json'
};

module.exports = function(ctx, req, res) {
  function throwError(error) {
    res.writeHead(500, HEADERS);
    res.end(error.toString());
  }

  if (!ctx.data.url) {
    return throwError(new Error('Missing `URL` querystring parameter'));
  }

  request.get(ctx.data.url, function(e, r) {
    if (e) {
      return throwError(new Error(e));
    }

    var result;
    try {
      result = JSON.parse(r.body);
    }
    catch (e) {
      return throwError(new Error(e));
    }
    result = JSON.stringify(result, null, 2);

    res.writeHead(200, HEADERS);
    res.end(result);
  });
};

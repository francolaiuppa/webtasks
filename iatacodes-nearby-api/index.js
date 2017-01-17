// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
const ENDPOINT = 'https://iatacodes.org/api/v6/nearby';
var request = require('request');
var globalCallback = null;

function validateInput(context) {
  if (!context.secrets.API_KEY) {
    return globalCallback(new Error('No API_KEY secret given'));
  }
  if (!context.data.lat || !context.data.lng) {
    return globalCallback(new Error('Missing lat or lng querystring fields'));
  }
}

function makeRequest(context, cb) {
  var params = {
    url: ENDPOINT,
    qs: {
      lat: context.data.lat,
      lng: context.data.lng,
      api_key: context.secrets.API_KEY,
      distance: context.data.distance || 400
    },
    json: true
  };
  request.get(ENDPOINT, params, cb);
}

function parseResponse(err, data) {
  if (err) {
    return globalCallback(err);
  }
  data = data.body.response;
  var result = [];
  data.forEach(function(item) {
    if (item.name.toLowerCase().indexOf('airport') !== -1) {
      result.push(item);
    }
  });
  if (result.length > 0) {
    return globalCallback(null, result[0]);
  }
  globalCallback(null, {});
}

module.exports = function(context, cb) {
  globalCallback = cb;
  validateInput(context);
  makeRequest(context, parseResponse);
};

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

var request = require('request');
const ENDPOINT = 'https://iatacodes.org/api/v6/nearby';

module.exports = function(context, cb) {
  if (!context.secrets.API_KEY) {
    return cb(new Error('No API_KEY secret given'));
  }
  if (!context.data.lat || !context.data.lng) {
    return cb(new Error('Missing lat or lng querystring fields'));
  }
  var params = {
    lat: context.data.lat,
    lng: context.data.lng,
    api_key: context.secrets.API_KEY,
    distance: context.data.distance || 1000
  };
  request.get(ENDPOINT, params, cb);
};

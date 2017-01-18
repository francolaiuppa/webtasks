// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
const ENDPOINT = 'https://iatacodes.org/api/v6/autocomplete';
var request = require('request');
var globalCallback = null;

function validateInput(context) {
  if (!context.secrets.API_KEY) {
    return globalCallback(new Error('No API_KEY secret given'));
  }
  if (!context.data.query) {
    return globalCallback(new Error('Missing query field'));
  }
}

function makeRequest(context, cb) {
  var params = {
    url: ENDPOINT,
    qs: context.data,
    json: true
  };
  request.get(ENDPOINT, params, cb);
}

function parseResponse(err, data) {
  if (err) {
    return globalCallback(err);
  }
  globalCallback(null, data.body.response);
}

module.exports = function(context, cb) {
  globalCallback = cb;
  validateInput(context);
  makeRequest(context, parseResponse);
};

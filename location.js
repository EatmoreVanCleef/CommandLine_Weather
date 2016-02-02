var request = require('request');
var ipInfoUrl = 'http://ipinfo.io';

module.exports = function() {
  return new Promise(function(resolve, reject) {
    request({
      url: ipInfoUrl,
      json: true
    }, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });

}

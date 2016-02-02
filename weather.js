var request = require('request');
var units = 'metric'
    appId = '44db6a862fba0b067b1930da0d769e98';

module.exports = function (location) {
  return new Promise(function(resolve, reject) {
    var encodedLocation = encodeURIComponent(location);
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=' + units + '&appid=' + appId;

    if (!location) {
      reject('Location not available.');
    }

    request({
      url: weatherUrl,
      json: true
    }, function(err, resp, body) {
      if (err) {
        reject('Unable to fetch weather.');
      } else {
        resolve("It's " + body.main.temp + " degrees with " + body.weather[0].description +" in " + body.name + ".");
      }
    });
  });


}

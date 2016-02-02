var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
        .option({
          location: {
            alias: 'l',
            demand: false,
            description: 'the name of the city',
            type: 'string'
          }
        })
        .help('help', 'Get some help.')
        .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
  console.log("Location provided.");
  var location = argv.l;
  weather(location).then(function(weatherInfo) {
    console.log(weatherInfo).catch(function(error) {
      console.log(error);
    });
  });
} else {
  console.log("No location provided.");
  location().then(function(locationInfo){
    return weather(locationInfo.city);
  }).then(function(weatherInfo) {
    console.log(weatherInfo);
  }).catch(function(error){
    console.log(error);
  });

}

A little Node app that fetches the weather from the command line.

Uses promises to fetch your location (via ipinfo.io) and then fetch weather information from a free online service (openweathermap.org).

Get started by running 'npm install' from command line to install dependencies.

RUN:

Fetch current weather for cityName: 
  $ node app.js -l {cityName} 

No args will cause app to guess your location:
  $ node app.js 

Get help: 
  $ node app.js --help 

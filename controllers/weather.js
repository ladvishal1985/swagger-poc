'use strict';

var weather = require('weather-js');

var getWeather = function(req, res, next) {
  // Code necessary to consume the Weather API and respond
  weather.find({
    search: 'San Francisco, CA',
    degreeType: 'F'
  }, function(err, result) {
    if (err) {
      console.log(err.stack);
      return next(err.message);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result[0] || {}, null, 2));
  });
};

module.exports = getWeather;

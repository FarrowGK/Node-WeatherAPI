const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/7f96674358de37ad562155c899e10806/${latitude},${longitude}`,
    json:true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        actualTemp: body.currently.apparentTemperature
      });
    } else {
      console.log('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;

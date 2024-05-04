const convertToCelsius = function(temperature) {
  let tempCelsius = (temperature-32)*(5/9);
  return Math.round(tempCelsius*10)/10;
};

const convertToFahrenheit = function(temperature) {
  let tempFahrenheit = (1.8*temperature)+32;
  return Math.round(tempFahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function (tempInFahrenheit) {
  const celsius = Math.round((tempInFahrenheit - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function (tempInCelsius) {
  const fahrenheit = Math.round((tempInCelsius * (9 / 5) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

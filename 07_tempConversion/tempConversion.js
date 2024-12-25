const convertToCelsius = function(tempInFarenheit) {
  const celsius = (tempInFarenheit -32) * (5/9);
  const celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(tempInCelsius) {
  const farenheit = (tempInCelsius * (9/5)) + 32;
  const farenheitRounded = Math.round(farenheit * 10) / 10;
  return farenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

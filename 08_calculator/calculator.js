const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
	
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	if (number === 0 || number === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

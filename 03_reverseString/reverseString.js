const reverseString = function(string) {
  return string.split('').reverse('').join('');
};

const exampleString = "hello";
const reversedString = reverseString(exampleString);
console.log(reversedString);

// Do not edit below this line
module.exports = reverseString;

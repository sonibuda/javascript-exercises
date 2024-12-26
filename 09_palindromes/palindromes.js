const palindromes = function (...phrase) {
const joinedPhrase = phrase
  .join('')
  .toLowerCase()
  .replace(/[^a-z0-9]/g, '');

const reversedPhrase = joinedPhrase
  .split('')
  .reverse()
  .join('');

  return reversedPhrase === joinedPhrase;
}

// Do not edit below this line
module.exports = palindromes;

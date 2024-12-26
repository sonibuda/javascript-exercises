const fibonacci = function(itemInSequence) {
   const fibSequence = [0, 1];

   for(let i = 2; i <= itemInSequence; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i -2];
   }

   if (itemInSequence < 0) {
    return "OOPS";
   } else {
    return fibSequence[itemInSequence];
}
};

// Do not edit below this line
module.exports = fibonacci;

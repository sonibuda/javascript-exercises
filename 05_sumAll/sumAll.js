const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
 const n = Math.abs(b - a) + 1;
 const min = Math.min(a, b);
 const max = Math.max(a, b);
 
 return n * (min + max) / 2;
}



// Do not edit below this line
module.exports = sumAll;


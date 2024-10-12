/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var initial = n;
    return function() {
        return initial++;
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

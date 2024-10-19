/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isFirst = true
    return (...args) => isFirst?(isFirst = false, fn(...args)): undefined;
};

let onceFn = once(fn)

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn


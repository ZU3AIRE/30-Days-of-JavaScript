/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var _arr = []
    for(var i = 0; i < arr.length; i++) {
        _arr.push(fn(arr[i], i))
    }
    return _arr;
};


let arr = [1,2,3]
let fn = function plusone(n) { return n + 1; }
console.log("Input was", arr, fn)
console.log("Output is", map(arr, fn));

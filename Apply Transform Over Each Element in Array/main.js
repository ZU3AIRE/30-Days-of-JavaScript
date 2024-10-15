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
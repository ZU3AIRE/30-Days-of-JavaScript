/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let r = []
    for(let i=0;i<arr.length;i++)  {
        if(fn(arr[i], i)) {
            r.push(arr[i])
        } 
    }
    return r
};


let arr = [0,10,20,30];
let fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn));
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    var memoized = []
    return function (...args) {
        if (memoized && memoized.filter(x => x.inp == args)) return memoized.filter(x => x.inp == args).res;
        var r = fn(...args);
        memoized.push({ inp: args, res: r });
        console.log(memoized)
        return r;
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 

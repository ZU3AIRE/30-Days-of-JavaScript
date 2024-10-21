/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return (x) => {
        const len = functions.length;
        for(let i = len - 1 ; i >= 0; i--) {
            x = functions[i](x)
        }            
        return x
    }
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9

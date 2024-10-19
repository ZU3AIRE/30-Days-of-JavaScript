/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

var case2 = [{},null,"3"];
console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength(...case2)); // 3
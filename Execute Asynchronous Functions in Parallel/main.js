/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const toBeResolved = functions.length
    let resolved = 0
    let results = new Array(toBeResolved);
    return new Promise((resolve, reject) => {
        functions.forEach((func, index) => {
            func()
                .then(res => {
                    resolved++
                    results[index] = res
                    if(resolved == toBeResolved) {
                        resolve(results)
                    }
                })
                .catch((error) => {
                    reject(error); // Reject immediately with the error
                });
        })
    });
};


const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]

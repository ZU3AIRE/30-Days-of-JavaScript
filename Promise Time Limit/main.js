/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  let interval;
  return async function(...args) {
      return new Promise((resolve, reject) => {
          const fnPromise = fn(...args)
              .then(resolve) 
              .catch(reject); 

          const timer = setTimeout(() => reject("Time Limit Exceeded"), t);
          fnPromise.finally(() => clearTimeout(timer));
      });
  }
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

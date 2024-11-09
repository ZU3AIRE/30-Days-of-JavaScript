/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  const _fn = fn
  const _t = t
  let interval
  return function(...args) {
      if(interval) {
          clearTimeout(interval)
      }
      interval = setTimeout(_fn, _t, ...args)    
  }
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms

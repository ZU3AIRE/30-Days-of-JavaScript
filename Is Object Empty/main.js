/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if(Array.isArray(obj)) {
    return obj.length == 0
  }  

  if(typeof obj == 'object' && obj != null) {
    return Object.entries(obj).length == 0
  }
  
  return false;
};

console.log(isEmpty({x: 1, y: 7})) // False
console.log(isEmpty({})) // True
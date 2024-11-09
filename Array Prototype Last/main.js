var TimeLimitedCache = function() {
  this.cache = new Map();
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const currentTime = Date.now();
  const existingKey = this.cache.get(key);
  
  let alreadyExists = false;
  if (existingKey && existingKey.expiryTime > currentTime) {
      alreadyExists = true;
      clearTimeout(existingKey.timeout); // Clear previous timeout if key already exists
  }
  
  const expiryTime = currentTime + duration;
  const timeout = setTimeout(() => this.cache.delete(key), duration);

  this.cache.set(key, { value, expiryTime, timeout });

  return alreadyExists;
};

/** 
* @param {number} key
* @return {number} value associated with key or -1 if expired
*/
TimeLimitedCache.prototype.get = function(key) {
  const currentTime = Date.now();
  const item = this.cache.get(key);

  if (item && item.expiryTime > currentTime) {
      return item.value;
  } else {
      this.cache.delete(key); // Clean up if the key is expired
      return -1;
  }
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  const currentTime = Date.now();
  let count = 0;

  for (const [key, item] of this.cache.entries()) {
      if (item.expiryTime > currentTime) {
          count++;
      } else {
          this.cache.delete(key); // Clean up expired keys
      }
  }

  return count;
};



const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1

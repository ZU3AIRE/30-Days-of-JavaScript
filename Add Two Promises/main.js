/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises =  async function (promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([v1, v2]) => v1 + v2)
    
    // Alternate
    // const v1 = await promise1;  // Await the first promise
    // const v2 = await promise2;  // Await the second promise
    // return v1 + v2;  // Return the sum
};


 addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4

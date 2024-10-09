var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

var f = createHelloWorld()

// Case 1
console.log(f(["190", {}, null]));

// Case 2 
console.log(f());
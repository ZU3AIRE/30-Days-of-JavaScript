/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var _state = {
        init,
        _cVal: init
    } ;

    return {
        increment: function() {
            return ++_state._cVal;
        },
        decrement: function() {
            return --_state._cVal;
        },
        reset: function() {
            return _state._cVal = _state.init;
        }
    }
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

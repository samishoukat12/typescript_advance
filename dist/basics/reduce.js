"use strict";
const reduceFunction = (a, b, ...rest) => {
    return a + b + rest.reduce((a, b) => a + b, 20);
};
console.log(reduceFunction(10, 30, 10));
/* eslint-disable no-console */
const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 2;
const add5 = (x) => x + 5;

const myNumber = 42;

const doubled = double(myNumber);
const minusOne = subtractOne(myNumber);
// ...

const functionArray = [double, subtractOne, triple, add5, Math.sqrt];

var number = 42;

functionArray.forEach(func => 
    number = func(number)));
console.log(number);

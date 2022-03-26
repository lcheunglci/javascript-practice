/* eslint-disable no-console */
const numbers = [1, 2, 3, 4, 5];

// this will modify the original array
// numbers.reverse();

// const doubleNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubleNumbers.push(numbers[i] * 2);
// }

const double = (x) => x * 2;

const doubleNumbers = numbers.map(double);

console.log(doubleNumbers);

/* eslint-disable no-console */
const numbers = [4, 5, 6, 3, 64, 63, 11, 36, 13, 6, 1];

const sum = numbers.reduce((acc, x) => {
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);
  return acc + x;
}, 0);

const product = numbers.reduce((acc, x) => {
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);
  return acc * x;
}, 1);
// note the starting value is very important,
// if it was zero then the end result would always be zero

console.log(sum);
console.log(product);

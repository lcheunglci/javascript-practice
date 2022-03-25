/* eslint-disable no-console */
// /* eslint-disable no-console */
// const divide = (x, y) => {
// Previous way of adding logic for validation
//   if (y === 0) {
//     console.log('Error: dividing by zero');
//     return null;
//   }
//   return x / y;
// };

const divide = (x, y) => x / y;

const secondArgumentIsntZero =
  (func) =>
  (...args) => {
    if (args[1] === 0) {
      console.log('Error: dividing by zero');
      return null;
    }

    return func(...args);
  };

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(8, 2));

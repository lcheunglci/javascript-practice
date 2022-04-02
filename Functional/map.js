/* eslint-disable no-plusplus */
/* eslint-disable no-console */

// vanilla js impl of map
// const map = (arr, func) => {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = func(arr[i]);
//     newArray.push(element);
//   }
//   return newArray;
// };

// impl of map with reduce
const map = (arr, func) => arr.reduce((acc, x) => [...acc, func(x)], []);

// testing if it works:

// Should be [2, 4, 6]
console.log(map([1, 2, 3], (x) => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9, 10], (x) => -x));

// Should be ['A', 'B', 'C', 'D']
console.log(map(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));

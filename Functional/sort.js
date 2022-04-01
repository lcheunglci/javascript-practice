/* eslint-disable no-console */
// we call slice() before we call sort to ensure it's mutates the copy

const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

// const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
const sortedNumbers = mixedUpNumbers.slice().sort(descending);

console.log(sortedNumbers);

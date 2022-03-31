/* eslint-disable no-console */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isEven = (x) => x % 2 === 0;

// const evenNumbers = numbers.filter(isEven);

const evenNumbers = numbers.filter((x) => x % 2 === 0);

// const evenNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

console.log(evenNumbers);

const words = ['hello', 'goodbye', 'the', 'Antarctica'];

// const isLongerThan5 = (word) => word.length > 5;

// const longWords = words.filter(isLongerThan5);

const createLengthTest = (minLength) => (word) => word.length > minLength;

// const isLongerThan5 = createLengthTest(5);
// const longWords = words.filter(isLongerThan5);

const longWords = words.filter(createLengthTest(5));

console.log(longWords);

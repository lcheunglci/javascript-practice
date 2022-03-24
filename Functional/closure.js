/* eslint-disable no-console */
const createPrinter = () => {
  const myFavoriteNumber = 42;

  return () => console.log(`My favorite number is ${myFavoriteNumber}`);
};

const printer = createPrinter();
printer();

// not myFavorite number is not defined
// console.log(myFavoriteNumber);

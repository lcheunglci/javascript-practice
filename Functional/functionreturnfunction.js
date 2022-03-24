// const createPrinter = () => () => console.log('Hello');

// const createPrinter = function () {
//   return function () {
//     console.log('Hello');
//   };
// };

// const double = (x) => x * 2;
// const triple = (x) => x * 3;
// const quadruple = (x) => x * 4;

const createMultiplier = (y) => (x) => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

double(3);
triple(3);
quadruple(3);

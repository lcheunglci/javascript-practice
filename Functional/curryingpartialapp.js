/* eslint-disable no-console */
const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y, z) => add(x, y, z);
const addPartial2 = (x, y) => (z) => add(x, y, z);
const addPartialSingle = (x) => (y) => (z) => add(x, y, z);

const add5 = addPartial(5);
const add5and6 = addPartial2(5, 6);
const sum = add5(6, 7);
const sameSum = add5and6(7);

const add5Single = addPartialSingle(5);
const add5SingleAnd6Single = add5Single(6);
const singleSum = add5SingleAnd6Single(7);

console.log(sum);
console.log(add(5, 6, 7));
console.log(sameSum);
console.log(singleSum);

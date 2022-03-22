/* eslint-disable no-console */
// const x = 5;

// x = 6; // not allowed

const numbers = [1, 2, 3, 4, 5];
// this is allowed, but is no longer allowed via eslint immutable plugin.
// numbers[0] = 100; // this is no longer allowed.
numbers.reverse(); // also allowed
console.log(numbers);

const person = {
  name: 'John Doe',
  age: 34,
};

// this is allowed, but is no longer allowed via eslint immutable plugin.
// person.name = 'Bob';

console.log(person);

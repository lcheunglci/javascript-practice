// const x = 5;

// x = 6; // not allowed

const numbers = [1, 2, 3, 4, 5];
// this is allowed, but is no longer allowed via eslint immutable plugin.
numbers[0] = 100;
numbers.reverse(); // also allowed

const person = {
  name: 'John Doe',
  age: 34,
};

// this is allowed, but is no longer allowed via eslint immutable plugin.
person.name = 'Bob';

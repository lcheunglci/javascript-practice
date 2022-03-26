/* eslint-disable no-console */
const person = {
  name: 'John Doe',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue',
};

const careerData = {
  name: 'Bob Smith',
  title: 'developer',
  company: 'ABC Software',
};

// Notice this if the object has the same property the one in the most right will be only one
// const personWithCareerData = {
//     ...person, ...careerData
// }

const personWithCareerData = {
  name: person.name,
  ...careerData,
};

console.log(personWithCareerData);

const updates = {
  name: 'Jack Jostar',
};

const updatedPerson = {
  ...person,
  ...updates,
};

console.log(updatedPerson);

const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

const newNumbers = [0, ...numbers, 6];

console.log(newNumbers);

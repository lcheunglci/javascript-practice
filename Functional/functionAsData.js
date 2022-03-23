/* eslint-disable no-console */
const sayHello = (name) => console.log(`Hello ${name}`);

const sayHello2 = sayHello;
sayHello2('Bob');

const myFunction = true
  ? () => console.log('First option')
  : () => console.log('Second option');

myFunction();

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time-intensive operations here!
};

const fetchDataFake = () => ({
  name: 'John Doe',
  age: 24,
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

fetchData();

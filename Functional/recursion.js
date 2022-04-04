/* eslint-disable no-console */

// using recursion to implement a for loop

const countDown = (x) => {
  if (x < 0) return;
  console.log(x);
  countDown(x - 1);
};

countDown(10);

const countUp = (x, max) => {
  if (x > max) return;
  console.log(x);
  countUp(x + 1, max);
};

countUp(1, 10);

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

// add(2, 3);
// subtract(9, 3);

const combined2and3 = (funct) => funct(2, 3);

combined2and3(add); // -> 2 + 3;
combined2and3((x, y) => x + y); // anonymous function
combined2and3(subtract); // -> 2 - 3;
combined2and3(Math.max); // -> 3
combined2and3((x, y) => x * y); // anonymous function

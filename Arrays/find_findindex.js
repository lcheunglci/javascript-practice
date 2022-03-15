const grades = [99, 83, 87, 91, 77];

//Find the first grade that is less than 80.

const underEighty = grades.find((element) => element < 80);
console.log(underEighty);

//Find the index of the first grade that is over 80.
const overEightyIndex = grades.findIndex((element) => element > 80);
console.log(overEightyIndex);

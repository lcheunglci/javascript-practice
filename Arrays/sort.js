//Sort the following array alphabetically
const pets = ['dog', 'cat', 'rabbit', 'hamster'];

console.log(pets.sort());

const grades = [88, 94, 72, 99, 53, 77];
//Sort the following array from highest to lowest
grades.sort((a,b) => b - a);
console.log(grades)


//Sort the following array from lowest to highest
grades.sort((a,b) => a - b);
console.log(grades)

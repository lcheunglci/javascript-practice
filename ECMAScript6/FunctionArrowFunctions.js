// Arrow functions =>

// before
// let studentList = function(students) {
//     console.log(students);
// }

// After
let studentList = (students) => console.log(students);


studentList(['a','b','c']);

let fruits = ['apple', 'orange', 'strawberry'];
fruits.map((item) => console.log(item));

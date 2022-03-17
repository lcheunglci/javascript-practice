let course = new Map();

course.set('react', {description: 'ui'});
course.set('jest', {description: 'testing'});

console.log(course);
// This does not work because a map is accessed by get
console.log(course.react);
console.log(course.get('react'));

let details = new Map([
    [new Date(), 'today'],
    [2, {javascript: ['js', 'node', 'react']}],
    ['items', [1,2]]
]);

// show the number of elements
console.log(details.size);

details.forEach(function(item) {
    console.log(item);
})

// map will keep it's order
let books = new Set();

// only contain unique values
books.add('Pride and Prejudice');
books.add('War and Peace');
books.add('Refactoring').add('jquery');
books.delete('jquery');

// note map is not an array and cannot use map on it, you'll get a TypeError
// books.map(function (item) {
books.forEach(function (item) {
    console.log(item);
})

console.log(books);
console.log(books.size);
console.log(books.has('React'));
console.log(books.has('Refactoring'));




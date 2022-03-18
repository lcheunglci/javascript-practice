// Generator example

function* director() {
    yield 'three';
    yield 'two';
    yield 'one';
    yield 'Action';
}

let countdown = director();

console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());
// note value is undefined and done is tree
console.log(countdown.next());

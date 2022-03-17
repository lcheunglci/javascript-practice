// ...

let cats = ['Garfield','BlackBerry'];
let dogs = ['Fido','Bingo'];
// This will create a nested array
let animals = ['Donald','Mickey', "Goofy", cats, dogs];
console.log(animals);
// This will make a single array
animals = ['Donald','Mickey', "Goofy", ...cats, ...dogs];
console.log(animals);

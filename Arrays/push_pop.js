const drinks = ['coffee', 'tea', 'soda', 'water'];
//How do we add "wine" to the array of drinks?

// note: the push returns the length
drinks.push('wine');
console.log(drinks);

const seasons = ['spring', 'summer', 'fall', 'winter'];
//How do we remove the last season from the seasons array?
//Store the element that is removed in a variable.
const popped = seasons.pop();
console.log('Popped:', popped);
console.log('Remaining Seasons', seasons);

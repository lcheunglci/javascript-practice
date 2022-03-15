const groceries = [
  { item: 'apples', type: 'fruit' },
  { item: 'cereal', type: 'pantry' },
  { item: 'pork chops', type: 'meat' },
  { item: 'bananas', type: 'fruit' },
  { item: 'broccoli', type: 'vegetable' },
];

//Filter the following array to include only those grocery items
//that are fruits.

//const fruits = groceries.filter((item) => { return item.type === 'fruit'});
const fruits = groceries.filter((item) => item.type === 'fruit');
console.log('fruits:',fruits);

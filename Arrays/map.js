const friends = [
  { firstname: 'Jane', lastname: 'Doe' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Alex', lastname: 'Trebek' },
];

//Create a new array that includes only the full name (firstname + lastname) of each friend.
//const fullNames = friends.map((friend) => friend.firstname + " " + friend.lastname);
// using string interpolation 
const fullNames = friends.map((friend) => `${friend.firstname} ${friend.lastname}`);
console.log(fullNames);

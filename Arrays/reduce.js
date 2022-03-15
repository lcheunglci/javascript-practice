const bills = [1200, 29.99, 65.93, 17.32, 44.76];

//Determine how much the total bills are using the reduce method
const totalBills = bills.reduce((total, bill) => total + bill );
console.log("total", totalBills);

// acc - accumulator: accumulate value or total
// el - currentValue: element being processed in the array
// index: optional, index of currentValue
// array: optional, original array being iterated over
// initialValue: optional, value to use for the initial accumulator, if nothing is passed, it'll use the first value


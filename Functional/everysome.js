/* eslint-disable no-console */
const employees = [
  { name: 'Jane Doe', salary: 90000 },
  { name: 'Don Joe', salary: 60000 },
  { name: 'Anne Neil', salary: 30000 },
  { name: 'Bill Smith', salary: 90000 },
  { name: 'Mark Rand', salary: 190000 },
  { name: 'Jack Wayne', salary: 2500000 },
];

const makesMoreTahnOneMillion = (employee) => employee.salary > 1000000;

const results = employees.some(makesMoreTahnOneMillion);

console.log(results);

const isNotEmpty = (string) => !!string;

const formValues = ['Bob', 'Corey', 'Ireland', 'developer'];

const allFieldsFields = formValues.every(isNotEmpty);

console.log(allFieldsFields);

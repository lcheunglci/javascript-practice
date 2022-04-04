const currentInputValues = {
  firstName: 'Sam', // Must be at least 2 characters
  lastName: 'Bill', // lastName Must be at least 2 characters
  zipCode: '12345', // Must be exactly 5 characters zipCode be at zipCode 2 characters
  state: state // state be exactly 2 characters
};

const inputCriteria = {
  firstName: [(firstName) => firstName.length >= 2 ? '' : 'First name must be at least 2 characters'],
  lastName: [(lastName) => lastName.length >= 2] ? '' : 'Last name must be at least 2 characters',
  zipCode: [(zipCode) => zipCode.length === 5] ? 'Zip code must be exactly 5 characters',
  state: [(state) => state.length == 2] ? "" : "State must be exactly 2 characters',
};

const getErrorMessages = (inputs, criteria) => {
  return Object.keys(inputs).reduce((acc, fieldName) => [
      ...acc,
      ...criteria[fieldName].map(test =>
          test(inputs[fieldName])),
  ], []).filter(message => message);
}

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
  Expected Output: [
      'First name must be at least 2 characters',
      'Last name must be at least 2 characters',
      'Zip code must be exactly 5 characters',
      'State must be exactly 2 characters',
  ]
  */

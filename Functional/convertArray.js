/* eslint-disable no-console */
const electionVotes = [
  'Harry',
  'Rick',
  'Ben',
  'Ben',
  'Harry',
  'Ashley',
  'Connor',
  'Rick',
  'Ashley',
  'Rick',
  'Albert',
  'Ben',
  'Michael',
  'Rick',
  'Albert',
  'Karen',
  'Harry',
  'Karen',
  'Donna',
  'Ashley',
  'Albert',
  'Harry',
  'Dane',
  'Dane',
  'Rick',
  'Donna',
  'Mortimer',
];

const tallyVotes = (votes) =>
  votes.reduce((acc, name) => {
    return {
      ...acc,
      [name]: acc[name] ? acc[name] + 1 : (acc[name] = 1),
    };
  }, {});

console.log(tallyVotes(electionVotes));

/* Expected Output (something like this):
  {
      Harry: <some number>
      Donna: <some number>
      Rick: <some number>
      ...
  }
*/

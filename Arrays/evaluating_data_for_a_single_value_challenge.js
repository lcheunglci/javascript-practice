//Includes, Some, and Every
const bowlingScores = [154, 204, 300, 184, 286];

//Challenge Question #1
//Does the array of bowling scores include a 300?
const includesScore300 = bowlingScores.includes(300);
console.log('Does the array of bowling scores include a 300?', includesScore300);

//Challenge Question #2
//Are some of the scores under 150?
const someScoresUnder150 = bowlingScores.some((score) => score < 150);
console.log('Are some of the scores under 150?', someScoresUnder150);

//Challenge Question #3
//Is every score an even number?
const everyScoreIsEven = bowlingScores.every((score) => score%2 === 0);
console.log('Is every score an even number?', everyScoreIsEven);
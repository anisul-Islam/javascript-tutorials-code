// 2D Array
// Create a function called highestRunScorer that will
// Receive a 2d array called playersInfo
// Based on highest score, return the name of the player

function highestRunScorer(playersInfo) {
  let highestScorer = playersInfo[0][0];
  let highestScore = playersInfo[0][1];

  for (var x = 1; x < playersInfo.length; x++) {
    if (highestScore < playersInfo[x][1]) {
      highestScorer = playersInfo[x][0];
    }
  }
  return highestScorer;
}
var playersInfo = [
  ["Ashraful", 95],
  ["Mizan", 25],
  ["Rakib", 45],
  ["lu", 105],
];
let x = highestRunScorer(playersInfo);
console.log(x);

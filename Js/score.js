//variables
let score = 0;
let highScore = 0;

//Search the elements in the HUD & change their values
let textScore = document.getElementById('score');
let textHighScore = document.getElementById('highScore');

textScore.textContent = 'score:' + score;
textHighScore.textContent = 'High score:' + highScore;

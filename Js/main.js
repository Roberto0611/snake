//Made by: Roberto Ochoa Cuevas

//variables
let score = 0;
let highScore = 0;

//Search the elements in the HUD & change their values
let textScore = document.getElementById('score');
let textHighScore = document.getElementById('highScore');

textScore.textContent = 'score:' + score;
textHighScore.textContent = 'High score:' + highScore;

//get fruit & snake position

    //get fruit and styles
    let fruit = document.getElementById('fruit');
    let computedStyle = getComputedStyle(fruit);

    //get X position of the fruit
    let fruitX = computedStyle.left;
    let fruitXNumber = parseFloat(fruitX);
    console.log("the X position of the fruit is:" + fruitXNumber);

    //get Y position of the fruit
    let fruitY = computedStyle.bottom;
    let fruitYNumber = parseFloat(fruitY);
    console.log("the Y position of the fruit is:" + fruitYNumber);


//console.log( getRandomNumber(1, 10))
//get fruit 

let fruit = document.getElementById('fruit');
let computedStyle = getComputedStyle(fruit);


//Randomize fruit position
function RandomFruit(maxX, maxY){
    
    let posX = getRandomNumber(0, maxX);
    fruit.style.left = posX + 'px';
    console.log("the X position of the fruit is:" + posX);

    //randomise & change pos Y
    let posY = getRandomNumber(-213, maxY);
    fruit.style.bottom = posY + 'px';
    console.log("the Y position of the fruit is:" + posY);
}
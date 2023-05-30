//get fruit position

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
    
//////////////////////////////////////////////////////////////////////
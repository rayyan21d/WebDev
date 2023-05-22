var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var display = document.querySelector("h1");

function main( dice ) {
    var randomNumber = Math.floor((Math.random()) * 6) + 1;
    var randomPath = "images/dice" + String(randomNumber) + ".png";
    dice.setAttribute("src", randomPath);

    return randomNumber;

}

function run()
{

    var d1 = main(dice1);
    var d2 = main(dice2);

    if (d1 > d2)
    {
        display.textContent = "Player 1 Wins!";
    }

    else if (d2 > d1)
    {
        display.textContent = "Player 2 Wins!";
    }
        
    else
    {
        display.textContent = "Draw!";    
    }
    

}

run();
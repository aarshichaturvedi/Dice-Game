// dice 1 
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1- 6
var randomDiceImg1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSrc1 = "images/" + randomDiceImg1; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSrc1);


// dice 2 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var randomImageSrc2 = "images/" + randomDiceImg2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSrc2);

// setting the player names

// if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1️⃣ Wins";
}
// if its a tie
else if(randomNumber1=== randomNumber2){
    document.querySelector("h1").innerHTML="Tie ! Roll the dice again!";
}
// if player 2 wins
else {
    document.querySelector("h1").innerHTML="Player 2️⃣ Wins";
}
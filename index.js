
var randomNumber1 = Math.floor(Math.random() * 6)+ 1; // 1-6
let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
let randomImageSource = "images/" + randomDiceImage; // get the dir images/dice1.png-images/dice6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6)+ 1; // 1-6
let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
let randomImageSource2 = "images/" + randomDiceImage2; // get the dir images/dice1.png-images/dice6.png


let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "#Play 1 wins!";
} else {
    document.querySelector("h1").innerHTML = "#Play 2 wins";
}

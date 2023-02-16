
var randomNumber1 = Math.floor(Math.random() * 6 )+ 1; // 1-6
let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
let randomImageSource = "images/" + randomDiceImage; // get the dir images/dice1.png-images/dice6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber1 = Math.ceil(6*(Math.random()));
var randomNumber2 = Math.ceil(6*(Math.random()));

const dices1= document.querySelector(".img1");
const dices2= document.querySelector(".img2");

const imgName1 = "images/dice"+randomNumber1+".png";
const imgName2 = "images/dice"+randomNumber2+".png";

dices1.setAttribute("src",imgName1);
dices2.setAttribute("src",imgName2);

if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
else if(randomNumber1 < randomNumber2)
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
else
document.querySelector("h1").innerHTML = "Match Draw! "

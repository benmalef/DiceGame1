
function randomDice(img_name){
var randomNumber1 = Math.floor((Math.random()*6)+1);

if (randomNumber1 == 1) {
  document.querySelector(img_name).setAttribute("src", "images/dice1.png");
}else if (randomNumber1 == 2) {
  document.querySelector(img_name).setAttribute("src", "images/dice2.png");
}else if (randomNumber1 == 3) {
  document.querySelector(img_name).setAttribute("src", "images/dice3.png");
}else if (randomNumber1 == 4) {
  document.querySelector(img_name).setAttribute("src", "images/dice4.png");
}else if (randomNumber1 == 5) {
  document.querySelector(img_name).setAttribute("src", "images/dice5.png");
}else if (randomNumber1 == 6) {
  document.querySelector(img_name).setAttribute("src", "images/dice6.png");
}
return (randomNumber1);
}

function winner(player_1,player_2){

  if(player_1==player_2){
    document.querySelector("h1").innerHTML = "Draw..!!!";
  }else if(player_1>player_2){
     document.querySelector("h1").innerHTML = "Winner Player 1...!!!";
  }else{
    document.querySelector("h1").innerHTML = "Winner Player 2...!!!";
  }

}

winner(randomDice(".img1"),randomDice(".img2"));

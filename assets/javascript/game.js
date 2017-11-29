//start the program
$(document).ready(function() {
	var randomNumber = Math.floor(Math.random()*31+29);
	console.log(randomNumber);
//generate a random number  players must match to use everytime the game is reset


 $("#random-number").text(randomNumber);



//generate a random number for all 4 crystals and they must change everytime the game is reset
var crystal1 = Math.floor(Math.random()*11+1);
var crystal2 = Math.floor(Math.random()*11+1);
var crystal3 = Math.floor(Math.random()*11+1);
var crystal4 = Math.floor(Math.random()*11+1);
//create a function for each crystal
//$("crystal_1").on(click, function (){

//});

var totalScore = 0;
var wins= 0;
var losses= 0;

$("#wins").text(wins);
$("#losses").text(losses);
$("#totalScore").text(totalScore);



function restart(){
	var randomNumber = Math.floor(Math.random()*69)+30;
	console.log(randomNumber);
//generate a random number  players must match to use everytime the game is reset


 $("#random-number").text(randomNumber);



//generate a random number for all 4 crystals and they must change everytime the game is reset
var crystal1 = Math.floor(Math.random()*11+1);
var crystal2 = Math.floor(Math.random()*11+1);
var crystal3 = Math.floor(Math.random()*11+1);
var crystal4 = Math.floor(Math.random()*11+1);
//create a function for each crystal
//$("crystal_1").on(click, function (){

//});

var totalScore = 0;
var wins= 0;
var losses= 0;

$("#wins").text(wins);
$("#losses").text(losses);
$("#totalScore").text(totalScore);

}

function youWin() {
	alert("YOU WIN!!");
 wins++;
 $("#wins").text(wins);
 reset();
}

function youLose() {
	alert("YOU lOSE!!");
 losses++;
 $("#losses").text(losses);
 reset();
}

$("#crystal_1").on('click', function () {
	var total = totalScore + crystal1;
	return total;
	$("#totalScore").text(totalScore);
	if(totalScore === randomNumber){
		youWin();
	} else if (totalScore > randomNumber){
		youLose();
	}
 });

});


//inside each function should have the random number stored in a variable

//when cllicking any crystal, it should be adding with the previous 
//until it hits the total score

//everytime the button is pressed the variable will be added to total score

//you win the game by matching your total socre to random number,
// you lose the game if your total score goes above the random number

//the value of each crystal is hidden from you until you click on it

//Each time when the game starts, the game will change the value of each crystal
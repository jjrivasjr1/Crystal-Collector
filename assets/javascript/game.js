//start the program
$(document).ready(function() {
//generate a random number  players must match to use everytime the game is reset



//generate a random number for all 4 crystals and they must change everytime the game is reset
var num1 = Math.floor(Math.random()*11+1);
var num2 = Math.floor(Math.random()*11+1);
var num3 = Math.floor(Math.random()*11+1);
var num4 = Math.floor(Math.random()*11+1);

//});
var totalScore = 0;
var wins= 0;
var losses= 0;
var randomNumber = Math.floor(Math.random()*31+29);
 $("#random-number").text(randomNumber);
$("#wins").text(wins);
$("#losses").text(losses);
$(".totalScore").text(totalScore);

function restart(){
	var totalScore = 0;
	console.log(totalScore);
	randomNumber = Math.floor(Math.random()*69)+30;
	console.log(randomNumber);
//generate a random number  players must match to use everytime the game is reset
 $("#random-number").text(randomNumber);

//generate a random number for all 4 crystals and they must change everytime the game is reset

// }

	 num1 = Math.floor(Math.random()*11+1);
	 num2 = Math.floor(Math.random()*11+1);
	 num3 = Math.floor(Math.random()*11+1);
	 num4 = Math.floor(Math.random()*11+1);
	 



$("#totalScore").text(totalScore);

}

function youWin() {
	alert("YOU WIN!!");
 
 totalScore = 0; 
 	
 restart();

}

function youLose() {
	alert("YOU lOSE!!");
 
 totalScore = 0;

 restart();
 
}

$(".crystal1").on('click', function () {

	 totalScore += num1;

	$(".totalScore").text(totalScore);
	if(totalScore === randomNumber){
		
		youWin();

		wins++;
		$("#wins").text(wins);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();
	} else if (totalScore >= randomNumber){
		
		youLose();
		losses++;
		$("#losses").text(losses);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();
	}

 });
$(".crystal2").on('click', function () {

	 totalScore += num2;
	
	 // console.log(totalScore);
	$(".totalScore").text(totalScore);
	if(totalScore === randomNumber){
		
		youWin();


		wins++;
		$("#wins").text(wins);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();

	} else if (totalScore >= randomNumber){
		
		youLose();
		losses++;
		$("#losses").text(losses);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();
	}

 });

$(".crystal3").on('click', function () {

	 totalScore += num3;
	
	 // console.log(totalScore);
	$(".totalScore").text(totalScore);
	if(totalScore === randomNumber){
		
		youWin();

		wins++;
		$("#wins").text(wins);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();
	} else if (totalScore >= randomNumber){
		
		youLose();
		losses++;
		$("#losses").text(losses);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();
	}

 });

$(".crystal4").on('click', function () {

	 totalScore += num4;
	console.log(totalScore);
	 // console.log(totalScore);
	$(".totalScore").text(totalScore);
	if(totalScore === randomNumber){
		
		youWin();

		wins++;
		$("#wins").text(wins);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();
	} else if (totalScore >= randomNumber){
		
		youLose();
		losses++;
		$("#losses").text(losses);
		total = 0;
		$(".totalScore").text(totalScore);
		restart();
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

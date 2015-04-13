//This is where we get the user input and change it all to manageable lowercase.
var ask = require('readline-sync');
var playersinitialchoice = ask.question(" \nRock! Paper! Scissors! Go! \n");
var choicefixed = playersinitialchoice.toLowerCase();

//This is for the "instant win/lose" options. Just for fun. These codes do the same thing in Starcraft.
if (choicefixed === "there is no cow level") {
	console.log("You win! Enjoy your empty, pointless victory!");
	return; // I used my modest google-fu to find out how to prematurely end the program. "return" seems to work, but let me know if there's a better way.
}
if (choicefixed === "game over man") {
	console.log("You lose! I don't understand why this is an option, but there you go!");
	return;
	
}

//This is where we create the computer response and name her response as a variable.
var compresponse = Math.random();
if (compresponse < 0.3333) {
	var comp = "rock";
	console.log("Your opponent throws Rock! ");
} else if (compresponse >= 0.6666) {
	var comp = "paper";
	console.log("Your opponent throws Paper! ");
} else {
	var comp = "scissors";
	console.log("Your opponet throws Scissors! ");
}

//Here, we decide and declare the victor.
if (choicefixed === comp) {
	console.log("It's a tie! Everybody loses!");
} else if ((choicefixed === "rock" && comp === "scissors") || (choicefixed === "paper" && comp === "rock") || (choicefixed === "scissors" && comp === "paper")) {
	console.log("You win! Good job!");
} else {
	console.log("You lose! Too bad for you!");
}

//And here, finally, we thank the player, because we're super classy.

console.log("Thank you for playing!\n");
//VARIABLES//
//Define array of words
var words = [
	"mint", 
	"chocolate", 
	"strawberry", 
	"pistachio"
];

//chooses random word each time, also makes variable for each single word.
var word = words[Math.floor(Math.random() * words.length)];

//answer array. makes _ same amount of letters as word; loops through each word
var answerArray = [];
	for (var i = 0; i < word.length; i++) {
		answerArray[i]= " _ ";
	};


document.querySelector("#currentWord").innerHTML = answerArray;

//Define var for wins, guesses remaining, already guessed.

var wins = 0;
var guessesRem = 15;
var alreadyGuessed = 0;

//FUNCTIONS//
//Create function that keeps score of wins.
function updateWins() {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
};

//function keeps score of guesses remaining guesses
function remaining() {
	document.querySelector("#guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRem;
}

//shows the answer and the join method 
function answer() {
	document.querySelector("#currentWord").innerHTML = answerArray.join(" ").toUpperCase();;
}

//making a reset function
function reset() {
	updateWins();
	remaining();
	answer();
}


//MAIN//
//call functions
updateWins();
remaining();
answer();

//Run game
document.onkeyup = function (event) {
	var userInput = event.key.toLowerCase();
	//for loop to loop through each letter of random word to match with the user input
	for(j = 0; j < word.length; j++) {
		if (userInput === word.charAt(j)) {
			answerArray[j] = userInput;
			answer();
		} else if (userInput != word.charAt(j)) {
			guessesRem--;
			remaining();
		}
	}
};

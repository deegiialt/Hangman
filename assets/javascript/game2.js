//Make the whole game a giant object
var hangmanGame = {
	wordsToPick: {
		pistachio: {
			picture: "https://www.angsarap.net/wp-content/uploads/2013/01/pistachio-ice-cream.jpg"
		},
		strawberry: {
			picture: "https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/exps8708_C2640C49B_RMS.jpg"
		},
		mint : {
			picture: "http://www.foodmatters.com/media/images/articles/choc-chip-icecream.jpg"
		},
		chocolate: {
			picture: "https://images.food52.com/HzawX1ZSKt66oQYV97SG0QSGwbI=/753x502/ad0a5aeb-c9e3-4ba2-877e-266f33c06b76--food52_02-19-13-0043.jpg"
		}
	},

	//Variables
	wordInPlay: null,
	lettersOfTheWord: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,

	//Function called when page loads
	

};
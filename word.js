var letter = require("./Letter");
var ask = require("./main.js");

var currentWord = 0;
var myLetters;
var correct = 0;
var incorrect = 0;
var guessHolder = 0;
let wins = 0;

// word constructor
var Word = function(wordArr, questionArr){

	this.question = questionArr[currentWord];

	this.questionDisplay = function(){
		console.log(questionArr[currentWord]);
	}

	this.word = wordArr[currentWord],

	this.letterCall = function(){
		myLetters = new letter(wordArr[currentWord]);
		guessHolder = 0;
		myLetters.display();
	}

	// checks if letter is in word
	// no way to check if already guessed 
	// bug when guessing correct letter multiple times
	this.YorN = function(guess){

		var theWord = wordArr[currentWord];
		var holder;
		var isIn;
		var holderArr =[];
		

		for(var i = 0; i < theWord.length; i++){

			var letter = theWord.charAt(i);

			if(guess == letter){
				isIn = true;
				holder = i;
				if(holder != null){
					holderArr.push(holder);
				}
			}else{
				isIn == false;
			}

		}

		if(holderArr.length == 2 && guessHolder == 1){
			correct -= 2;
		}

		if(isIn){
			correct +=1;
			if(holderArr.length == 2){
				guessHolder++;
				correct +=1;
			}
			
			if(correct == theWord.length){
				wins++
				correct = 0;
				incorrect = 0;
				myLetters.displayGuess(holderArr, guess);
				currentWord += 1;
				if(currentWord == 4){
					console.log("Good job the game is over! You got " + wins + " out of 4 correct!");
				}else{
					this.questionDisplay();
					this.letterCall();
					ask.askUser();
				}
			}else{
				myLetters.displayGuess(holderArr, guess);
				console.log('You got it!\n');
				ask.askUser();
			}
		}else{
			incorrect++;
			if(incorrect == 5){
				incorrect = 0;
				correct = 0;
				currentWord +=1;
				console.log("\nSorry you missed 5. On to the next word.\n");
				if(currentWord == 4){
					console.log("Good job the game is over! You got " + wins + " out of 4 correct!");
				}else{
					this.questionDisplay();
					this.letterCall();
					ask.askUser();
				}
				
			}else{
				myLetters.displayGuess(holderArr, guess);
				console.log('Nope guess again!\n');
				ask.askUser();
			}
		}
	}
}

module.exports = Word;
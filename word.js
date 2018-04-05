var letter = require("./Letter");

var ask = require("./main.js");

var currentWord = 0;

var myLetters;

var correct = 0;
var incorrect = 0;
// var finish = 1;
var guessHolder = 0;

var Word = function(wordArr, questionArr){

	this.question = questionArr[currentWord];

	this.questionDisplay = function(){
		console.log(questionArr[currentWord]);
	}

	this.word = wordArr[currentWord],

	this.letterCall = function(){
		// incorrect = 0;f
		myLetters = new letter(wordArr[currentWord]);
		guessHolder = 0;
		myLetters.display();
		// guessHolder = 0;
	}

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
			// console.log(correct);
			// console.log(holderArr.length);
			if(holderArr.length == 2){
				// console.log(correct);
				guessHolder++;
				correct +=1;
			}
			
			if(correct == theWord.length){
				correct = 0;
				incorrect = 0;
				myLetters.displayGuess(holderArr, guess);
				currentWord += 1;
				if(currentWord == 4){
					console.log("Good job the game is over!");
				}else{
					this.questionDisplay();
					this.letterCall();
					ask.askUser();
				}
			}else{
				myLetters.displayGuess(holderArr, guess);
				console.log('You got it!');
				console.log('');
				ask.askUser();
			}
		}else{
			incorrect++;
			// console.log(incorrect);
			if(incorrect == 5){
				incorrect = 0;
				correct = 0;
				currentWord +=1;
				console.log('');
				console.log("Sorry you missed 5. On to the next word.");
				console.log('');
				this.questionDisplay();
				this.letterCall();
				ask.askUser();
			}else{
				myLetters.displayGuess(holderArr, guess);
				console.log('Nope guess again!');
				console.log('');
				ask.askUser();
			}
		}
	// }
	}
}

module.exports = Word;
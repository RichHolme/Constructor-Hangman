var letter = require("./Letter");

var ask = require("./main.js");

var currentWord = 0;

var myLetters;

var correct = 0;

var Word = function(wordArr, questionArr){

	// this.start = function(){
	// 	ask.askQuestion();
	// }
	this.question = questionArr[currentWord];

	this.questionDisplay = function(){
		console.log(questionArr[currentWord]);
	}

	this.word = wordArr[currentWord],

	this.letterCall = function(){

		myLetters = new letter(wordArr[currentWord]);
		
		myLetters.display();

	}

	this.YorN = function(guess){

		var theWord = wordArr[currentWord];
		var holder;
		var isIn; 

		for(var i = 0; i < theWord.length; i++){

			// var num_matches = theWord.match(/d/gi).length;
			// console.log(num_matches);
			var letter = theWord.charAt(i);

			if(guess == letter){
				isIn = true;
				holder = i;
			}else{
				isIn == false;
			}

		}

		if(isIn){
			correct +=1;
			if(correct == theWord.length){
				correct = 0;
				myLetters.displayGuess(holder, guess);
				currentWord += 1;
				this.questionDisplay();
				this.letterCall();
				ask.askUser();
			}else{
				myLetters.displayGuess(holder, guess);
				console.log('You got it!');
				console.log('');
				ask.askUser();
			}
			
		}else{
			myLetters.displayGuess();
			console.log('Nope guess again!');
			console.log('');
			ask.askUser();
		}
	}
}

module.exports = Word;
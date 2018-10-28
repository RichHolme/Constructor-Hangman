var wordHolder = '';
var wordArr = [];
var correct = 0;
var holder1;
var holder2;
var guessHolder = 0;

// letter constructor displays ---- word to screen
var Letter = function(word) {

	// if the user is correct format to screen
	this.display = function(){

		wordArr.length = 0;
		wordHolder = '';
		guessHolder = 0;

		for(var i = 0; i < word.length; i++){
			wordArr.push('');
			wordHolder = wordHolder + ' _';
		}

		console.log(wordHolder);
		console.log('');

	}

	// checks if user got word of missed 5
	this.displayGuess = function(holderArr, guess){

		var win;
		wordHolder = '';

		if (holderArr.length == 2) {guessHolder++;}

		holder1 = holderArr[0];
		holder2 = holderArr[1];

		for(var i = 0; i < word.length; i++){

			if(i == holder1){
				wordArr[holder1] = guess;
				
				correct += 1;

				if(guessHolder == 2 && holder2 != null){
					correct -= 1;
				}
				
				if(correct == word.length){
					correct = 0;
					console.log('\nYou got the word!\n')
					win = true;
				}

			}else if(i == holder2 && holder2 != null){
				wordArr[holder2] = guess;
	
				correct += 1;
				if(guessHolder == 2){
					correct -= 1;
				}
				
				if(correct == word.length){
					correct = 0;
					console.log('\nYou got the word!\n')
					win = true;
				}
			}
		}
			
		for(var i = 0; i < wordArr.length; i++){
			if(wordArr[i] != ''){
				wordHolder = wordHolder + wordArr[i];
				if(!win){
					win = false;
				}
				
			}else{
				wordHolder = wordHolder + ' _';
				if(!win){
					win = false;
				}
			}
		}
		
		if(!win){
			console.log('\n' +wordHolder+ '\n');
		}else if(win){
			wordArr.length = 0;
			console.log(wordHolder+ '\n');
		}	
		
	}
} 

module.exports = Letter;
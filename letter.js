var wordHolder = '';
var wordArr = [];
var correct = 0;
var holder1;
var holder2;

var guessHolder = 0;

var Letter = function(word) {
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
		// console.log(wordHolder[5]);
	}
	this.displayGuess = function(holderArr, guess){
		var win;
		wordHolder = '';

		if (holderArr.length == 2) {guessHolder++;}
		// console.log(guessHolder);
		// console.log(wordHolder.length);
		holder1 = holderArr[0];
		holder2 = holderArr[1];
		
		
		
		
		for(var i = 0; i < word.length; i++){

			if(i == holder1){
				wordArr[holder1] = guess;
				// console.log(correct);
				
				correct += 1;
				// console.log(holder2);
				if(guessHolder == 2 && holder2 != null){
					correct -= 1;
				}
				
				if(correct == word.length){
					correct = 0;
					// wordArr.length = 0;
					console.log('');
					// console.log(wordHolder);
					console.log('You got the word!')
					console.log('');
					// wordArr.length = 0;
					win = true;
				}
			}else if(i == holder2 && holder2 != null){
				wordArr[holder2] = guess;
				// console.log(correct);
				
				correct += 1;
				if(guessHolder == 2){
					correct -= 1;
				}
				
				if(correct == word.length){
					correct = 0;
					// wordArr.length = 0;
					console.log('');
					// console.log(wordHolder);
					console.log('You got the word!')
					console.log('');
					// wordArr.length = 0;
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
		// console.log(wordArr);
		if(!win){
			// console.log(wordArr);
			console.log('');
			console.log(wordHolder);
			console.log('');
		}else if(win){
			// console.log(wordArr + ' working');
			wordArr.length = 0;
			console.log(wordHolder);
			console.log('');
		}	
		
	}
} 

module.exports = Letter;
var wordHolder = '';
var wordArr = [];
var correct = 0;

var Letter = function(word) {
	this.display = function(){
		for(var i = 0; i < word.length; i++){
			wordArr.push('');
			wordHolder = wordHolder + ' _';
		}

		console.log(wordHolder);
		console.log('');
		// console.log(wordHolder[5]);
	}
	this.displayGuess = function(holder, guess){
		var win;
		wordHolder = '';

		// console.log(holder);
		// console.log(guess);

		for(var i = 0; i < word.length; i++){

			if(i == holder){
				wordArr[holder] = guess;
				correct += 1;
				console.log(wordArr);
				if(correct == word.length){
					correct = 0;
					wordArr.length = 0;
					console.log('');
					console.log('You got the word!')
					console.log('');
					win = true;
				}
			}
		}

		for(var i = 0; i < wordArr.length; i++){
			if(wordArr[i] != ''){
				wordHolder = wordHolder + wordArr[i];
				win = false;
				
			}else{
				wordHolder = wordHolder + ' _';
				win = false;
			}
		}
		// console.log(wordArr);
		if(!win){
			console.log('');
			console.log(wordHolder);
			console.log('');
		}
	}
} 

module.exports = Letter;
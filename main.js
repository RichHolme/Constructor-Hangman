var word = require("./Word");

var inquirer = require('inquirer');
var wordArr = ['bond', 'option', 'stock', 'future'];
var currentWord = 0;

var questionArr = 
[
'Hint 1: The holder lends money to a company or municipality with a fixed intrest rate',
'Hint 2: A contract which gives the buyer the right to buy or sell at a specified price on a specified day',
'Hint 3: A share of a company held by an individual or group',
'Hint 4: A legal agreement to buy or sell something at a predetermined price at a specified time in the future'
];

console.log('');
console.log('Welcome to financial hangman! Guess one letter at a time. If you miss 5 you loose.');
console.log('');

var myWord = new word(wordArr, questionArr);

// myWord.start();


function askQuestion(){
	console.log(questionArr[currentWord])
}

function askUser() {

	inquirer.prompt([
		{
			type: "input",
    		name: "guess",
    		message: "Guess a letter"
		}
	]).then(function(user) {
		var guess = user.guess;
		myWord.YorN(guess);
	});
	
}

function play(){
	askQuestion();
	myWord.letterCall();
	askUser();
}

play();

module.exports.askUser = askUser;
// module.exports.askQuestion = askQuestion;
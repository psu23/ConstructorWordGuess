//required packages for app to run
var inquirer = require("inquirer");
var Word = require("./Word");

//words that will be prompted for user to guess
var answers = ["albuquerque", "atlanta", "austin", "baltimore", "boston", "chicago", "columbus", "charlotte", "dallas", "denver", "detroit", "honolulu", "houston", "lasvegas", "losangeles", "louisville", "memphis", "miami", "minneapolis", "nashville", "neworleans", "newyork", "philadelphia", "phoenix", "portland", "richmond", "sanantonio", "sandiego", "san francisco", "sanjose", "seattle", "washington"];

var currentWord;
var guessesLeft;
var word;

function runGame() {
    guessesLeft = 15;
    currentWord = answers[Math.floor(Math.random() * answers.length)];//chooses a random word
    word = new Word(currentWord);
    word.populate();

    console.log("\n----------------------------------------------");
    console.log("\n**********************************************");
    console.log("\n----------------------------------------------");
    console.log("\nAmerican city guessing game!\n You will have 15 guesses.\nDo not use capital letters, only lowercase!\n Good luck!");
    word.toString();

    console.log(`${guessesLeft} guesses left for this word.`);
    runGuess();
}

function runGuess() {
    inquirer
    .prompt(
        {
            name: "guess",
            message: "Guessed letter: "
        }
    )
    .then(reply => {
        
        if (reply.guess.length > 1) {
        console.log("Only one letter per try");
        runGuess();
        }

        else {
            var userGuess = reply.guess;

            word.checkChar(userGuess);

            guessesLeft--;

            console.log(`${guessesLeft} guesses left for this word.`);

            arrayUpdate();
        }
    });
}

function arrayUpdate() {
    var guessed = [];

    word.wordLetters.map(letter => guessed.push(letter.guessed));

    if (guessed.includes(false) && guessesLeft > 0) {
        runGuess();
    }

    else if (guessed.includes(false) && guessesLeft === 0) {
        console.log(`Next time!\nThe correct city was ${currentWord}.`);
        newRound();
    }

    else if (!guessed.includes(false)) {
        console.log("Good job!");
        newRound();
    }


}

function newRound() {
    inquirer
    .prompt(
        {
            name: "newRound",
            message: "Try another?",
            type: "confirm",
            default: true
        }
    )
    .then(reply => {
        if (reply.newRound) {
            runGame();
        }
        else {
            console.log("Try again later!");
        }
    });
}

runGame();
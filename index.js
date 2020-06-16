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
    //user the Word constructor out of the word of random index of the answers array
    word = new Word(currentWord);
    word.populate();

    console.log("\n----------------------------------------------");
    console.log("\n**********************************************");
    console.log("\n----------------------------------------------");
    console.log("\nAmerican city guessing game!\nDo not use capital letters, only lowercase!\nGood luck!");
    word.toString();

    console.log(`${guessesLeft} guesses left for this word.`);
    runGuess();
}

function runGuess() {
    inquirer
    //User will prompted for their guessed letter
    .prompt(
        {
            name: "guess",
            message: "Guessed letter: "
        }
    )
    .then(reply => {
        //if the user has entered more than one letter, alert them..
        if (reply.guess.length > 1) {
        console.log("Only one letter per try");
        //..then re-run the current function.
        runGuess();
        }

        else {
            //save the current letter
            var userGuess = reply.guess;
            //check the letter against the current word stored in the constructed word object
            word.checkChar(userGuess);
            //remove a count from the total guesses left after each entry
            guessesLeft--;

            console.log(`${guessesLeft} guesses left for this word.`);
            //after the letter entry, update the array..
            arrayUpdate();
        }
    });
}

function arrayUpdate() {
    //..define an empty array
    var guessed = [];

    word.wordLetters.map(letter => guessed.push(letter.guessed));

    if (guessed.includes(false) && guessesLeft > 0) {
        runGuess();
    }
    //if there are no remaining guesses, show the answer, and offer another play
    else if (guessed.includes(false) && guessesLeft === 0) {
        console.log(`Next time!\nThe correct city was ${currentWord}.`);
        newRound();
    }
    //congratulate player if they correctly guess city, and offer another play
    else if (!guessed.includes(false)) {
        console.log("Good job!");
        newRound();
    }


}

function newRound() {
    //create an inquirer prompt that offers another playthrough of the game
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
            //if the default reply/confirm is entered, start the game again
            runGame();
        }
        else {
            console.log("Try again later!");
        }
    });
}

//initially start the game upon calling node index.js
runGame();
var Letter = require("./Letter.js");

class Word {
    constructor(currentWord){
        this.currentWord = currentWord;
        this.wordLetters = [];//array to hold the letters of the word
    }

    populate(){
        //this method separates the word into constituent letters
        var wordArray = this.currentWord.split("");
        for (var i=0; i<wordArray.length; i++){
            //for every letter in the word, the Letter constructor pushes the letters to a new array
            var letter = new Letter(wordArray[i]);
            //store every individually in wordLetters array
            this.wordLetters.push(letter);
        }
    }

    checkChar(char) {
        //check if guessed letter exists in word
        this.wordLetters.map(character => character.matchGuess(char));
        this.toString();
    }
    
    toString() {
        //transform guessed letters into string/word
        var string = "";
        //for each matching letter, add the letters to the string comprising the partial word/answer
        this.wordLetters.map(character => string += character.letterGuess());
        console.log(string);
        return string;
    }
}

//make Word constructor available outside of this file
module.exports = Word;
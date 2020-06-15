var Letter = require("./Letter.js");

class Word {
    constructor(currentWord){
        this.currentWord = currentWord;
        this.wordLetters = [];//array to hold the letters of the word
    }

    populate(){
        var wordArray = this.currentWord.split("");
        for (var i=0; i<wordArray.length; i++){
            var letter = new Letter(wordArray[i]);
            this.wordLetters.push(letter);
        }
    }

    checkChar(char) {
        this.wordLetters.map(character => character.matchGuess(char));
        this.toString();
    }
    
    toString() {
        var string = "";
        this.wordLetters.map(character => string += character.letterGuess());
        console.log(string);
        return string;
    }
}

module.exports = Word;
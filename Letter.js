class Letter {
    constructor(character){
        //for each letter of the current word
        this.character = character;
        this.guessed = false;
    }

    letterGuess() {
        if (this.guessed) {
            //if a letter is guessed, the letter will be returned to the user in its spot
            return this.character;
        }
        else {
            //otherwise, a "-" will be shown in the yet to be guessed letter's place
            return "-";
        }
    }

    matchGuess(letter){
        if (this.character === letter) {
            //if the letter is a correct guess, if statement of letterGuess will be true
            this.guessed = true;
        }
    }
}

//make Letter constructor available outside of this file
module.exports = Letter;
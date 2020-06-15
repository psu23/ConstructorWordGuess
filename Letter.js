class Letter {
    constructor(character){
        this.character = character;
        this.guessed = false;
    }

    letterGuess() {
        if (this.guessed) {
            return this.character;
        }
        else {
            return " -";
        }
    }

    matchGuess(letter){
        if (this.character === letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;
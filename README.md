# Constructor Word Guess (Node game)

Constructor Word Guess is a command line node game that uses JavaScript constructors and the npm dependency inquirer to formulate prompts for users to interact with--in this case, a word guessing game (particularly US cities).

# Application Organization

1. First, a Github repository called liri-node-app was made. In the root of the repo, the terminal/gitbash command `npm init` was run to initialize a `package.json` file to the project, which is required for installing third party npm packages and saving their version numbers. 

2. A `.gitignore` file was was made, which stores files in the repo that are not shared to github:

node_nodules
.DS_Store
.env

3. Three `.js` files were made:

index.js
Word.js
Letter.js

`index.js` is the outermost interface of the application, while `Word.js` (required for `index.js`) processes the words (cities) listed in `index.js` that will be listed as a series of blanks to the user, by using the `Letters.js` file required for `Word.js`.

# User Instructions

1. While in /ConstructorWordGuess in terminal or gitbash, enter `node index.js` (as shown in the gif) below.

![gif animation of game](./constructor-gif.gif)

2. A series of blanks will appear that will appear in the amount of characters in the US city you must guess.

3. Begin by entering *lowercase* letters one by one. In this game, uppercase letters will not be recognized.

4. For cities composed of two words, they will appear as one string/word.

5. Guess wisely, as you will have only 15 guesses (including correctly guessed letters) for each word.

6. After you complete the word, you have the choice of trying again!


# Technologies Used

* Node.js

* inquirer

# Credits

* Patrick Urbankowski
/* VARIABLES */

// Creates an array that lists out all of the options (A-Z).
var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');
// Creates variables to hold # of times the user has guessed the letter correctly
var numWins = 0;
// Creates variables to hold # of times the user has failed to guess the letter correctly after exhausting all guesses
var numLosses = 0;
// Creates variables to hold # of guesses left
var guessLeft;
// Creates variable array to hold the specific letters that the user typed
var currentGuesses;
// Creates variable to hold users guess
var userGuess;
// Creates variable to hold computer's letter that user needs to guess
var computerLetter = '';

/* FUNCTIONS */

// Resets the game, by generating a new computer letter and resetting guess variables.
function gameReset() {
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessLeft = 9;
    currentGuesses = [];
    userGuess = '';
}

/* GAME LOGIC */

// Initialize first instance of game
gameReset();

// Check user guess when the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    userGuess = event.key;

    // Print computer guess to console for debugging
    console.log(computerLetter);

    // Checks the user's guess
    if (typeof userGuess === 'string') {
        if ((userGuess.toLowerCase() === computerLetter)) {
            numWins++;
            gameReset();
        }
        else {
            guessLeft--;
            if (guessLeft > 0) {
                currentGuesses.push(userGuess);
            } else {
                numLosses++;
                gameReset();
            }
        }
        // Update HTML with variable values
        document.querySelector('#numWins').innerHTML = "" + numWins;
        document.querySelector('#numLosses').innerHTML = "" + numLosses;
        document.querySelector('#guessLeft').innerHTML = "" + guessLeft;
        document.querySelector('#currentGuesses').innerHTML = currentGuesses;
        document.querySelector('#userGuess').innerHTML = userGuess;
    }
};


var zeldaWords = ['zelda', 'link', 'epona', 'kakariko'];
var wordDisplay = document.getElementById("wordDisplay");
var guessesLeft = document.getElementById("guessesLeft");
var numGuesses = 7;
var wins = document.getElementById("wins");
var numWins = 0;
wins.textContent = numWins;
var guessedLetters = document.getElementById("guessedLetters")
var letters = [];



document.onkeyup = function () {
    //stores key pressed into a variable
    // var keyPressed = event.key;
    //picks a random string in array zeldaWords and stores it to var currentWord
    var currentWord = zeldaWords[Math.floor(zeldaWords.length * Math.random())];
    //starts blank Array for the current word
    var currentWordArray = [];
    //starts blank Array for num of blanks
    var blanksArray = [];
    //starts guesses left at 7
    guessesLeft.textContent = numGuesses;


    //pushes letter of currentWord into currentWord Array
    //then, pushes same number of blanks as words in currentWord to blanksArray
    //displays blanksArray with commas removed
    for (i = 0; i < currentWord.length; i++) {
        currentWordArray.push(currentWord[i]);
        blanksArray.push(" _ ");
        wordDisplay.textContent = blanksArray.join("");
    }

    document.onkeyup = function(event) {
        //stores key pressed into a variable
        var keyPressed = event.key;

            //loops through currentWordArray and checks if keypress is equal to any indexes
            //If equal, splices letter into blanksArray
            //displays new blanksArray
            for (j = 0; j < currentWordArray.length; j++) {
                if (keyPressed === currentWordArray[j]) {
                    blanksArray.splice(j, 1, currentWordArray[j]);
                    wordDisplay.textContent = blanksArray.join("");
                } 
            }

            //checks if key pressed is not equal to any indexes of currentWordArray
            //if not equal to any, number of guesses decreases by 1
            //pushes key pressed letter into letters, displays new number of guesses and guessed letters
            if (currentWordArray.indexOf(keyPressed) === -1) {
                numGuesses -= 1;
                letters.push(keyPressed);
                guessedLetters.textContent = letters;
                guessesLeft.textContent = numGuesses;
            };

            if (blanksArray == currentWordArray) {
                numWins++;
                wins.textContent = numWins;
            }

            console.log(numWins);

            
            }
        



    };
    






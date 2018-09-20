var wordDisplay = document.getElementById("wordDisplay");
var guessesLeft = document.getElementById("guessesLeft");
var wins = document.getElementById("wins");
var numGuesses = 7;
var numWins = 0;

var guessedLetters = document.getElementById("guessedLetters");
var letters = [];

var zelda = {
    words: ['zelda', 
        'link', 
        'epona', 
        'kakariko',
        'ganandorf',
        'cuccos',
        'triforce',
        'goron',
        'zora',
        'kokiri',
        'saria'
    ],
    
    wordDefinition: ["Zelda: The princess of hyrule",
        "Link: The main character of the game who saves Hyrule",
        "Epona: Link's trusty horse that he rescued from Ingo",
        "Kakariko: The town of Hyrule where most residents live",
        "Ganondorf: The only male of the Gerudo tribe and the main antagonist of Hyrule",
        "Cuccos: The chickens of Hyrule",
        "Triforce: The three piece triangle that contains Courage, Wisdom, and Power",
        "Goron: A race of rock people inhabiting Hyrule",
        "Zora: The proud aquatic people of Hyrule",
        "Kokiri: The children of the forest",
        "Saria: Link's childhood friend and the Forest Sage"

    ],

    image: [ "assets/images/zelda.png", 
        "assets/images/link.png",
        "assets/images/epona.png",
        "assets/images/kakariko.jpg",
        "assets/images/ganondorf.png",
        "assets/images/cuccos.gif",
        "assets/images/triforce.png",
        "assets/images/goron.png",
        "assets/images/zora.png",
        "assets/images/kokiri.png",
        "assets/images/saria.png"
    ]
    
}

//displays description of word on win
function winningDisplay (winningWord) {
    var winningWordIndex = zelda.words.indexOf(winningWord);
    var winText = document.getElementById("winText");
    winText.textContent = zelda.wordDefinition[winningWordIndex];

}

//displays image of word on win
function winningImage (winningWord) {
    var winningWordIndex = zelda.words.indexOf(winningWord);
    var winImage = document.getElementById('winImage');
    winImage.setAttribute("src", zelda.image[winningWordIndex]);
} 



//on first keypress
document.onkeyup = function start() {
    //picks a random string in array zelda.words and stores it to var currentWord
    var currentWord = zelda.words[Math.floor(zelda.words.length * Math.random())];
    
    // to test a specific word
    // var currentWord = zelda.words[4];
    
    //starts blank Array for the current word
    var currentWordArray = [];

    //starts blank Array for num of blanks
    var blanksArray = [];

    //starts guesses left at 7
    guessesLeft.textContent = numGuesses;

    //starts wins at 0
    wins.textContent = numWins;

    //pushes letters of currentWord into currentWord Array
    //then, pushes same number of blanks as words in currentWord to blanksArray
    //displays blanksArray with commas removed
    for (i = 0; i < currentWord.length; i++) {
        currentWordArray.push(currentWord[i]);
        blanksArray.push(" _ ");
        wordDisplay.textContent = blanksArray.join("");
        
    }

    //on second keypress
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
            if (currentWordArray.indexOf(keyPressed) === -1 && letters.indexOf(keyPressed) === -1) {
                numGuesses -= 1;
                letters.push(keyPressed);
                guessedLetters.textContent = letters;
                guessesLeft.textContent = numGuesses;
            };

            //if word is guessed correctly
            if (blanksArray.toString() == currentWordArray.toString()) {
                numWins++;
                wins.textContent = numWins;
                var winningWord = currentWordArray.join('');
                winningDisplay (winningWord);
                winningImage (winningWord);

                //restarts with new word on keypress
                document.onkeyup = function() {
                    start();
                    numGuesses = 7;
                    guessesLeft.textContent = numGuesses;
                    letters = [];
                    guessedLetters.textContent = letters;
                    winText.textContent = '';
                    winImage.setAttribute("src", "");
                }

            }


            //if number of guesses runs out
            if (numGuesses === 0) {
                var lost = document.getElementById("lostText");
                lost.textContent = "Out of guesses!";
                wordDisplay.textContent = currentWordArray.join('');
                
                //restarts with new word on keypress
                document.onkeyup = function() {
                    start();
                    numGuesses = 7;
                    guessesLeft.textContent = numGuesses;
                    letters = [];
                    guessedLetters.textContent = letters;
                    lost.textContent = "";
                }

            
            }

           
        }

    };
    






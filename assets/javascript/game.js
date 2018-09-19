
var zeldaWords = ['zelda', 'link', 'epona', 'kakariko'];
var wordDisplay = document.getElementById("wordDisplay");




document.onkeyup = function start() {
    //picks a random string in array zeldaWords and stores it to var currentWord
    var currentWord = zeldaWords[Math.floor(zeldaWords.length * Math.random())];
    var currentWordArray = [];
    var spacesArray = [];

    //turns currentWord into an array and stores it in var currentWordArray
    //currentWordArray displays in browser
    for (i = 0; i < currentWord.length; i++) {
        currentWordArray.push(currentWord[i]);
        currentWordArray.push("_ ");
        wordDisplay.textContent = currentWordArray;
    }

   
    for (i = 0; i < currentWordArray.length; i += 2) {
        currentWordArray[i].style.display = 'none';
    }
    

};




// for i = 0; i < currentWord.lenght; i++) {
    // spacesArray.push("_ ") }
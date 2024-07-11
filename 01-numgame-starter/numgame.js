// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const inputGame =  document.getElementById("input-game");
const guessArea = document.getElementById("guess-area");
let randomNumber = parseInt(Math.random() * 100);
let guessNumber = parseInt(inputGame.value);
var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});
function makeGuess(){
    guessNumber = parseInt(inputGame.value);
    console.log("Guess : " + guessNumber);
    if (randomNumber < guessNumber)
    {guessArea.innerHTML = guessNumber + " is too high";}
    else if (randomNumber > guessNumber)
        {guessArea.innerHTML = guessNumber + " is too low";}
    else if (randomNumber == guessNumber){
    guessArea.innerHTML = "You got it!";
    randomNumber = parseInt(Math.random() * 101);
        myConfetti({
            particleCount: 2000, spread: 360

        })
}
}

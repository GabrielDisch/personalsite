// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const inputGame = document.getElementById("input-game");
const guessArea = document.getElementById("guess-area");
const scoreText = document.getElementById("score-text");
let randomNumber;
let highScore = 100000;
let currentScore = 0;
var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});
let body = document.body;
function reset() {
    randomNumber = Math.floor(Math.random() * 100);

}
function makeGuess() {
    currentScore++;
    let guessNumber = Math.floor(inputGame.value);
    var bkColor = Math.floor(Math.abs((guessNumber - randomNumber) / 40 * 256));
    body.style.backgroundColor = `rgb(${bkColor},${255 - bkColor},0)`
    console.log("Guess : " + guessNumber);
    if (randomNumber < guessNumber) { guessArea.innerHTML = guessNumber + " is too high"; }
    else if (randomNumber > guessNumber) { guessArea.innerHTML = guessNumber + " is too low"; }
    else if (randomNumber == guessNumber) {
        guessArea.innerHTML = "You got it!";

        randomNumber = parseInt(Math.random() * 101);
        myConfetti({
            particleCount: 2000, spread: 360

        })
        if (currentScore < highScore) {
            highScore = currentScore;
            scoreText.innerHTML = highScore;
        }
        currentScore = 0;
    }
}

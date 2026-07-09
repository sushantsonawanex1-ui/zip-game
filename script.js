const zip = document.getElementById("zip");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const highScoreDisplay = document.getElementById("highScore");

let highScore = localStorage.getItem("highScore") || 0;

highScoreDisplay.textContent = highScore;
const gameArea = document.getElementById("gameArea");

let score = 0;
let timeLeft = 30;
let gameRunning = false;
let timer;

// Move the box to a random position
function moveZip() {
    const maxX = gameArea.clientWidth - zip.clientWidth;
    const maxY = gameArea.clientHeight - zip.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    zip.style.left = randomX + "px";
    zip.style.top = randomY + "px";
}

// When the box is clicked
zip.addEventListener("click", () => {
    if (!gameRunning) return;

    score++;
    scoreDisplay.textContent = score;
    moveZip();
});

// Start the game
startBtn.addEventListener("click", () => {

    score = 0;
    timeLeft = 30;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    gameRunning = true;

    moveZip();

    clearInterval(timer);

    timer = setInterval(() => {

        timeLeft--;
        timeDisplay.textContent = timeLeft;

        moveZip();

        if (timeLeft <= 0) {

            clearInterval(timer);

            gameRunning = false;

            alert("🎉 Game Over!\n\nYour Score: " + score);

        }

    },1000);

});

const generateButton = document.getElementById("generate-btn");
const ballsContainer = document.getElementById("balls-container");

generateButton.addEventListener("click", generateBackground);
function generateBackground() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    createBalls();
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createBalls() {
    const numBalls = 30;
    ballsContainer.innerHTML = "";

    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement("div");
        ball.className = "ball";
        ball.style.backgroundColor = getRandomColor();
        ball.style.left = `${Math.random() * 100}%`;
        ball.style.animationDuration = `${Math.random() * 5 + 2}s`;
        if (i % 2 === 0) {
            ball.style.animationName = "fallBall";
        } else {
            ball.style.animationName = "moveBall";
        }
        ballsContainer.appendChild(ball);
    }
}

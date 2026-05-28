const gameArea = document.getElementById('gameArea');
let score = 0;
let gameOver = false;

function createObject() {
    const obj = document.createElement('div');
    obj.classList.add('object');
    obj.style.left = Math.random() * (gameArea.clientWidth - 40) + 'px';
    gameArea.appendChild(obj);
    moveObject(obj);
}

function moveObject(obj) {
    let pos = 0;
    const interval = setInterval(() => {
        if (pos >= gameArea.clientHeight - 40 || gameOver) {
            clearInterval(interval);
            obj.remove();
             // Decrease score if object reaches the bottom
            updateScore();
        } else {
            pos += 10;
            obj.style.top = pos + 'px';
        }
    }, 40);
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('object')) {
        score+=1;
        e.target.remove();
        updateScore();
    }
});

setInterval(() => {
    if (!gameOver) createObject();
}, 1000);

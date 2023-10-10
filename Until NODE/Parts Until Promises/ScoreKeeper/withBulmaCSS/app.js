let currentPoints = 5;
const pointSelection = document.querySelector('#pointSelection');
const buttonReset = document.querySelector('#btnReset');
const card = document.querySelector('div .card');
const winnerBoardH1 = document.querySelector('#winner');

const player1 = {
    score: 0,
    display: document.querySelector('#scoreP1'),
    button: document.querySelector('#btnP1'),
    playerName: 'Player 1'
};

const player2 = {
    score: 0,
    display: document.querySelector('#scoreP2'),
    button: document.querySelector('#btnP2'),
    playerName: 'Player 2'
};

function updateScore(player, opponent) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === currentPoints) {
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
        card.classList.add('hasWon');
        winnerBoardH1.style.color = 'green';
        winnerBoardH1.textContent = `${player.playerName} WON!`;
    }
}

player1.button.addEventListener('click', function() {
    updateScore(player1, player2);
});

player2.button.addEventListener('click', function() {
    updateScore(player2, player1);
});

function reset(curFinalPoint = 5) {
    for (player of [player1, player2]) {
        player.score = 0;
        player.display.innerText = player.score;
        player.button.disabled = false;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
    pointSelection.value = curFinalPoint;
    currentPoints = curFinalPoint;
    card.classList.remove('hasWon');
    winnerBoardH1.textContent = "Ping Pong Score Keeper";
    winnerBoardH1.style.color = 'black';
}

buttonReset.addEventListener('click', function() {
    reset();
});

pointSelection.addEventListener('change', () => {
    reset(parseInt(pointSelection.value));
});
const pointSelection = document.querySelector('#pointSelection');

let currentPoints = 5;
const buttonReset = document.querySelector('#btnReset');

const buttonP1 = document.querySelector('#btnP1');
const scoreH1P1 = document.querySelector('#scoreP1');
let scoreP1 = 0;

const buttonP2 = document.querySelector('#btnP2');
const scoreH1P2 = document.querySelector('#scoreP2');
let scoreP2 = 0;

buttonP1.addEventListener('click', function(event) {
    scoreP1 += 1;
    scoreH1P1.innerText = scoreP1;
    if (scoreP1 === currentPoints) {
        scoreH1P1.style.color = 'green';
        scoreH1P2.style.color = 'red';
        buttonP1.disabled = true;
        buttonP2.disabled = true;
    }
});

buttonP2.addEventListener('click', function() {
    scoreP2 += 1;
    scoreH1P2.innerText = scoreP2;
    if (scoreP2 === currentPoints) {
        scoreH1P2.style.color = 'green';
        scoreH1P1.style.color = 'red';
        buttonP1.disabled = true;
        buttonP2.disabled = true;
    }
});

buttonReset.addEventListener('click', function() {
    scoreP1 = 0;
    scoreP2 = 0;
    scoreH1P1.innerText = scoreP1;
    scoreH1P2.innerText = scoreP1;
    buttonP1.disabled = false;
    buttonP2.disabled = false;
    pointSelection.value = "5";
    currentPoints = 5;
    scoreH1P2.style.color = 'black';
    scoreH1P1.style.color = 'black';
});

pointSelection.addEventListener('change', () => {
    currentPoints = parseInt(pointSelection.value);
});
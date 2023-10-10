// Generates random number in the range [0, 255]
const body = document.body;
const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

const getRandomNumber = () => {
	return Math.floor(Math.random() * 256);
}

const getRandomRBGColor = () => {
	let R = getRandomNumber();
	let G = getRandomNumber();
	let B = getRandomNumber();
	h1.style.color = (R + G + B < 150) ? 'white' : 'black';
	return `rgb(${R}, ${G}, ${B})`;
}

const changeBacgroundColor = () => {
	let randomColor = getRandomRBGColor();
	changeHeader(randomColor);
	body.style.backgroundColor = randomColor;
	body.style.setTransition
}

const changeHeader = (randomColor) => {
	h1.innerText = randomColor;
}

btn.addEventListener('click', changeBacgroundColor);
const container = document.querySelector('#container');
const changeColorButton = document.querySelector('#changeColor');

function getRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

changeColorButton.addEventListener('click', (e) => {
	container.style.backgroundColor = getRandomColor();
	e.stopPropagation();
});

container.addEventListener('click', () => {
	container.classList.toggle('hide');
});
// const btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
// 	console.log(event);
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', (e) => {
// 	console.log("down", e.key, e.code);
// });

window.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
			console.log("Up");
			break;
		case 'ArrowDown':
			console.log("Down");
			break;
		case 'ArrowLeft':
			console.log("Left");
			break;
		case 'ArrowRight':
			console.log("Right");
			break;
		default:
			console.log("Ignored");
	}
});
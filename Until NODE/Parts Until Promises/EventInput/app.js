const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', () => {
// 	console.log('CHANGE');
// });

input.addEventListener('input', () => {
	h1.innerText = input.value;
});
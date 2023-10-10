// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('section[id="container"]');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 200; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pokemon');
    container.appendChild(newDiv);

    const newImage = document.createElement('img');
    newImage.src = `${baseUrl}${i}.png`;
    newDiv.appendChild(newImage);

    const newSpan = document.createElement('span');
    newSpan.innerText = `${i}`;
    newDiv.appendChild(newSpan);
}
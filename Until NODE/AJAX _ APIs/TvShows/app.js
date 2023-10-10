const placeholderImg = 'https://static.tvmaze.com/images/api/tvm_api.png';
const section = document.querySelector('section');

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const searchString = form.elements.query.value;
	form.elements.query.value = "";

	const config = { params: { q: searchString, isFunny: 'melo' } };
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

	section.replaceChildren();
	buildImages(res.data);
});


function buildImages(shows) {
	for (let result of shows) {
		const img = document.createElement('IMG');
		img.src = result.show.image ?
				result.show.image.medium : placeholderImg;
		section.append(img);
	}
}

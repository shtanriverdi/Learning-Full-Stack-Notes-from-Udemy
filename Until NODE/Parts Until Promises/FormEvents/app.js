const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const catsList = document.querySelector('#cats');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let catName = input.value;
	input.value = '';
	if (catName) {
		let listItem = document.createElement('li');
		listItem.innerText = catName;
		catsList.appendChild(listItem);
	}

});

const tweetForm = document.querySelector('#tweetForm');
const username = tweetForm.username;
const tweet = tweetForm.tweet;
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit', (e) => {
	e.preventDefault();
	
	let usernameText = username.value;
	let tweetText = tweet.value;

	username.value = '';
	tweet.value = '';

	let usernameLi = document.createElement('b');
	let tweetLi = document.createElement('li');
	usernameLi.innerText = `${usernameText} - `;
	tweetLi.appendChild(usernameLi);

	tweetLi.append(tweetText);

	tweets.append(tweetLi);
	// <li>
	// 	<b>Melo<b>
	// 	Tweetasdkj
	// <li>
});
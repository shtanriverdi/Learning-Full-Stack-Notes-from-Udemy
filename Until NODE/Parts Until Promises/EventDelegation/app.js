const tweetForm = document.querySelector('#tweetForm');
const username = tweetForm.username;
const tweet = tweetForm.tweet;
const tweets = document.querySelector('#tweets');

tweets.addEventListener('click', (e) => {
	e.target.nodeName === 'LI' && e.target.remove();
});

tweetForm.addEventListener('submit', (e) => {
	e.preventDefault();
	
	let usernameText = username.value;
	let tweetText = tweet.value;

	username.value = '';
	tweet.value = '';

	let usernameLi = document.createElement('b');
	let tweetLi = document.createElement('li');

	usernameLi.append(usernameText);
	tweetLi.append(usernameLi);
	tweetLi.append(`- ${tweetText}`);
	tweets.append(tweetLi);
	// MY Alternative Solution to Event Delegation
	// tweetLi.addEventListener('click', () => {
	// 	tweetLi.remove();		
	// });

	// <li>
	// 	<b>Melo<b>
	// 	Tweetasdkj
	// <li>
});
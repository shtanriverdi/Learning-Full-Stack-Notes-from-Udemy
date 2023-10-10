const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

function detectLanguage(text) {
	const possibleLanguageCode = franc(text);
	if (possibleLanguageCode === 'und') {
		console.log("Couldn't Detect the language :(, try more words...".red);
		return;
	}
	const possibleLanguageName = langs.where("3", possibleLanguageCode).name;
	console.log(possibleLanguageName.green);
}

const input = process.argv[2];
detectLanguage(input);
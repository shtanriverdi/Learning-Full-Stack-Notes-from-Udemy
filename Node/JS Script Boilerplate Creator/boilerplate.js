// Require File System Module
const fs = require('fs');

// Take the given input by user as argument
const folderName = process.argv[2] || 'Project';

try {

	// Create the folder, Sync
	fs.mkdirSync(folderName);

	const htmlData = `!<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<h1></h1>
</body>
</html>`;

	fs.writeFileSync(`${folderName}/index.html`, htmlData);
	fs.writeFileSync(`${folderName}/app.css`, "");
	fs.writeFileSync(`${folderName}/app.js`, "");
} catch (e) {
	console.log("Something went wrong,", e)
}
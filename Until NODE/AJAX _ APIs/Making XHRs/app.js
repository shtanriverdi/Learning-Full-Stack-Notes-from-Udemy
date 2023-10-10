// const api = "https://swapi.dev/api/people/1/"
const req = new XMLHttpRequest();

req.onload = function() {
	console.log("LOADED", this);
	const data = JSON.parse(this.responseText);
	console.log(data.height);
}

req.onerror = function() {
	console.log("Error", this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();
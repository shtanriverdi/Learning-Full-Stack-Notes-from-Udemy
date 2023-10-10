// const promise = fetch("https://swapi.dev/api/people/1");
// promise
// .then(response => {
// 	return response.json();
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(error => {
// 	console.log("Error:", error);
// })

// const promise = fetch("https://swapi.dev/api/people/1");
// promise
// .then(response => {
// 	return response.json();
// })
// .then(response => {
// 	console.log(response);
// 	return fetch("https://swapi.dev/api/people/2");
// })
// .then(res2 => {
// 	console.log("SECOND REQUEST", res2);
// 	return res2.json();
// })
// .then(response2 => {
// 	console.log(response2);
// })
// .catch(error => {
// 	console.log("Error:", error);
// })

const loadStarWarsPeople = async () => {
	try {
		const res = await fetch("https://swapi.dev/api/people/1");
		const data = await res.json();
		console.log(data);

		const res2 = await fetch("https://swapi.dev/api/people/2");
		const data2 = await res2.json();
		console.log(data2);
	} catch(err) {
		console.log("Error:", err);
	}
}

loadStarWarsPeople();
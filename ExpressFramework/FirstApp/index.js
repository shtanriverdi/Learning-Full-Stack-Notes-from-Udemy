const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});

// Anytime we have an incoming request
// wherever it come from(/home, /asd)
// This code will run, all request come in here
// app.use((req, res) => {
// 	console.log("WE GOT A REQUEST");
// 	/*
// 		Anytime we send a response to a request
// 		we are done, a request can't get more than one
// 		response!
// 	*/
// 	res.send("<h1>This is GENESIS Corp!</h1>");
// 	// res.send("This is the response!");
// 	// res.send({
// 	// 	color: "red",
// 	// 	name: "Genesis"
// 	// });
// });

// /cats => 'meow'
// /dogs => 'woof'
// '/'

/*
This looks for any pattern that matches with
/r/"something"
{ subreddit: 'cats' }
{ subreddit: 'dogs' }
*/
app.get('/', (req, res) => {
	res.send("Home sweet home!!!");
});

app.get('/search', (req, res) => {
	// Returns the query string as an object
	// { abc: 'genesis1', melo: 'genes' }
	const queryString = req.query;
	if (Object.keys(queryString).length === 0) {
		res.send("NOTHING FOUND, NOTHING SEARCHED :(");
		return;
	}
	const queryStrings = [];
	for (const [key, value] of Object.entries(queryString)) {
		const query = `<h1>Key: ${key}, Value: ${value}</h1>`;
		queryStrings.push(query);
	}
	res.send(queryStrings.join(""));
});

app.get('/r/:subreddit', (req, res) => {
	// Returns an object
	const { subreddit } = req.params;
	res.send(`<h1>Welcome to ${subreddit}</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
	// Returns an object
	const { subreddit, postId } = req.params;
	res.send(`<h1>Viewing post id: ${postId} on ${subreddit}</h1>`);
});

app.get('/cats', (req, res) => {
	res.send("CAT REQUEST");
});

app.get('/dogs', (req, res) => {
	res.send("DOG REQUEST");
});

app.post('/cats', (req, res) => {
	res.send("CAT post post");
});

// Reponses all the GET requests!
// Put the the the end
app.get('*', (req, res) => {
	res.send("I don't know that path!");
});

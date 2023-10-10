// axios.get("https://swapi.dev/api/people/1")
// .then(res => {
// 	console.log(res.data);
// })
// .catch(err => console.log(err))

// const getStarWarsPerson = async (id) => {
//     try {
//         const response = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(response.data.name);
//     } catch (e) {
//         console.log("Error:", e);
//     }
// }

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');
const btns = document.querySelectorAll('button');
const getJoke = btns[0];
const clear = btns[1];

const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: "application/json"
            }
        };
        const response = await axios.get(`https://icanhazdadjoke.com/`, config);
        console.log(response.data.joke);
        return response.data.joke;
    } catch (e) {
        console.log("No Jokes Anymore!:", e);
        return "NO Jokes!";
    }
}

const addNewJoke = async () => {
    const li = document.createElement('li');
    li.textContent = await getDadJoke();
    jokes.append(li);
}

function clearAllJokes() {
	jokes.replaceChildren();
	// Alternative solution
    // while (jokes.hasChildNodes()) {
    //     jokes.removeChild(jokes.lastChild)
    // }

    /* AŞAĞIDAKİ FOR LOOP HATALI ÇALIŞCAK!
		jokes.children returns
		 a dynamic nodeList that changes underneath
		  you each time you remove an element 
		  which causes you to miss elements
		   in your iteration
    */
    // for (let joke of kids) {
    //     console.log(joke);
    //     joke.remove()
    // }
}

getJoke.addEventListener('click', addNewJoke);
clear.addEventListener('click', clearAllJokes);
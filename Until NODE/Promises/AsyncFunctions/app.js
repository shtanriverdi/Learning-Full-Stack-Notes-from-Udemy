function fakeRequests() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Here is your data!');
            reject("Data Couldn't load :(");
        }, 1500);
    });
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequests();
        console.log("DATA1: ", data1);
        let data2 = await fakeRequests();
        console.log("DATA2: ", data2);
    } catch (e) {
        console.log("Error: ", e);
    }
}

makeTwoRequests();

// const delayedColorChange = (color, delay) =>  {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }


// ------------FOR LOOP EXAMPLE-------
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// (async function run() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         await sleep(1000);
//     }
// })();
// -----------------------------------

// ------------------ MY OWN VERSION ----------------
// Source:
// https://www.sitepoint.com/delay-sleep-pause-wait/
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function changeBackgroundColor(color) {
//     document.body.style.backgroundColor = color;
// }

// async function delayedColorChangeMyOwnVersion() {
//     changeBackgroundColor('red');
//     await sleep(1000);
//     console.log("RED")
//     changeBackgroundColor('green');
//     await sleep(1000);
//     console.log("Green")
//     changeBackgroundColor('orange');
//     await sleep(1000);
//     changeBackgroundColor('lightblue');
//     await sleep(3000);
//     console.log("ASYNC COMPLETED")
// }

// delayedColorChangeMyOwnVersion();
//-------------------------------------------------------




// async function rainnbow() {
//     await delayedColorChange('red', 1000);
//     console.log('RED');
//     await delayedColorChange('green', 1000);
//     await delayedColorChange('orange', 1000);
//     await delayedColorChange('lightblue', 1000);
//     await delayedColorChange('lightgreen', 1000);
//     console.log('FINISH');
//     return "Rainbow Done!"
// }

// async function printRainbow() {
//     const promiseMsg = await rainnbow();
//     console.log('ALL FINISHED!', promiseMsg)
// }

// printRainbow();

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('lightblue', 1000))
//     .then(() => delayedColorChange('violet', 1000))
//     .then(() => delayedColorChange('lightgreen', 1000))

// async function hello() {

// }

// const sing = async () => {
//     // throw new Error('UH OH');
//     throw "Uh No, problem!";
//     return 'OLALALA';
// }

// sing()
//     .then(data => { 
//         console.log("Promise resolved with: ", data)
//      })
//     .catch(err => { 
//         console.log("Promised rejected with: ", err)
//      })

// const login = async (username, password) => {
//     if (!username || !password) {
//         throw 'Missing Credentials';
//     }
//     if (password === 'GENESIS') {
//         return 'Welcome!';
//     }
//     throw 'Invalid password';
// }

// login('Melo', 'GENESIS')
//     .then((msg) => console.log(msg))
//     .catch(err => console.log("Error! ", err))
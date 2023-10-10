// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 15) + 500;
        setTimeout(() => {
            if (delay > 1000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

fakeRequestPromise('github.com/APIs')
    .then((response) => {
        console.log(response);
        return fakeRequestPromise('github.com/APIs/Page1');
    })
    .then((response) => {
        console.log(response);
        return fakeRequestPromise('github.com/APIs/Page2');
    })
    .then((response) => {
        console.log(response);
        fakeRequestPromise('github.com/APIs/Page2');
    })
    .catch((err) => {
        console.log("Rejected!", err);
    })

// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 1500) + 500;
//     setTimeout(() => {
//         if (delay > 1000) {
//             failure('Connection Timeout :(');
//         } else {
//             success(`Here is your fake data from ${url}`);
//         }
//     }, delay);
// };


// WITH PROMISE COLOR EXERCISE
// const fakeRequestPromise = (color) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.floor(Math.random() * 11);
//         setTimeout(() => {
//             if (random > 8) {
//                 document.body.style.backgroundColor = 'black';
//                 reject('Unfortunate :(');
//             } else {
//                 document.body.style.backgroundColor = color;
//                 resolve('Lucky');
//             }
//         }, 1500);
//     });
// };
// fakeRequestPromise('green')
//     .then((response) => {
//         console.log(response);
//         fakeRequestPromise('orange')
//             .then((response) => {
//                 console.log(response);
//                 fakeRequestPromise('cyan')
//                     .then((response) => {
//                         console.log(response);
//                         fakeRequestPromise('purple')
//                             .then((response) => {
//                                 console.log(response);
//                             })
//                             .catch((err) => {
//                                 console.log(err);
//                             })
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     })
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// WITH PROMISE
// fakeRequestPromise('nexflix.com/api/watch')
//     .then((val) => {
//         console.log(val);
//         fakeRequestPromise('nexflix.com/api/watch/page2')
//             .then((val) => {
//                 console.log(val);
//                 fakeRequestPromise('nexflix.com/api/watch/page3')
//                     .then((val) => {
//                         console.log(val);
//                     })
//                     .catch((err) => {
//                         console.info("REJECTED 3", err);
//                     })
//             })
//             .catch((err) => {
//                 console.info("REJECTED 2", err);
//             })
//     })
//     .catch((err) => {
//         console.info("REJECTED 1", err);
//     })

// WITH CALLBACK
// fakeRequestCallback('github.com/APIs', 
//     function (response) {
//         console.log("Worked 1st Time");
//         console.log(response);
//         fakeRequestCallback('github.com/APIs/Second', 
//             function (response) {
//                 console.log("Worked 2nd Time");
//                 console.log(response);
//                 fakeRequestCallback('github.com/APIs/Third', 
//                     function (response) {
//                         console.log("Worked 3rd Time");
//                         console.log(response);
//                     },
//                     function (error) {
//                         console.log(error);
//                     }
//                 );
//             },
//             function (error) {
//                 console.log(error);
//             }
//         );
//     }, function (error) {
//         console.log(error);
//     }
// );
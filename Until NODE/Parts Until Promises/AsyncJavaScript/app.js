// console.log("I will run first");

// setTimeout(() => {
// 	console.log("I will run after 3 seconds");
// }, 3000);

// console.log("I am at the end of the file");


// setTimeout(() => {
// 	document.body.style.backgroundColor = 'red';
// 	setTimeout(() => {
// 		document.body.style.backgroundColor = 'orange';
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = 'yellow';
// 			setTimeout(() => {
// 				document.body.style.backgroundColor = 'green';
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

const delayedColorChange = function(newColor, delay, doNext) {
	setTimeout(() => {
		document.body.style.backgroundColor = newColor;
		doNext && doNext();
	}, delay);
};

delayedColorChange('red', 1000, () => {
	delayedColorChange('orange', 1000, () => {
		delayedColorChange('yellow', 1000, () => {
			delayedColorChange('green', 1000, () => {
				delayedColorChange('olive', 1000, () => {
					delayedColorChange('purple', 1000, () => {
						delayedColorChange('grey', 1000, null);
					});
				});
			});
		});
	});
});

/const randomNumber1 = new Promise((resolve, reject) => {

// Math class is used to generate the random number.
	resolve(Math.random( ))
})
const randomNumber2 = new Promise((resolve, reject) => {
	resolve(Math.random( ))
})
Promise.all([randomNumber1, randomNumber2])


.then((messages) => {
	console.log(messages)
})

 
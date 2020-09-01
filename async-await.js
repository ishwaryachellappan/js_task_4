const randomNumber1 = new Promise((resolve, reject) => {

	resolve(Math.random( ))
})
const randomNumber2 = new Promise((resolve, reject) => {
	resolve(Math.random( ))
})
Promise.all([randomNumber1, randomNumber2])
.then((messages) => {
	console.log(messages)
})

if((randomNumber1+randomNumber2) <= 0) {
        console.log("User Logged in successfully!");
    } else  {
        console.log("Oops!try again");
    }
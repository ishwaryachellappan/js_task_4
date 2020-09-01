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

try {
   let numbers = randomNumber1+randomNumber2;
   if (numbers => 0 ){
     throw new Error("positive")
   }
} catch(e) {
   alert(e.message)
} 
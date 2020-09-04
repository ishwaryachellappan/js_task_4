const randomNumber1 = new Promise((resolve, reject) => {

//math.random function is used to generate random numbers

	resolve(Math.random( ))
})
const randomNumber2 = new Promise((resolve, reject) => {
	resolve(Math.random( ))
})
Promise.all([randomNumber1, randomNumber2])
.then((messages) => {
	console.log(messages)
})
//async await method

async function doIt() {
  try {
   let numbers = randomNumber1+randomNumber2;
   if (numbers => 0 ){
     throw new Error("positive")
   }
   else{
     throw new Error("negative")
   }
} catch(e) {
   console.log(e.message)
} 
}
//finally calling the main method
doIt();

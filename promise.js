//declaring a promise

let p = new Promise((resolve, reject) => {

//declaring the prime number array
const primeNumber = [2,3,5,7,11,13];
//getting millisecond through a package
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
//using conditional statement
if ( primeNumber[4] % milliseconds ==0)
{
	resolve(' Sucess !')
}
else
 {
	reject(' Better luck next time !')
}
})


p.then( (message) => {
console.log(message)
})


.catch( (message) => {
console.log(message)
})


let p = new Promise((resolve, reject) => {


const primeNumber = [2,3,5,7,11,13];

var today = new Date();
var milliseconds = today.getUTCMilliseconds();

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
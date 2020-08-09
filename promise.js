const task = new Promise(() => {
  var array = new Array(50);
//declaring an array of 50 numbers.
//for loop is used to get all the values from 1 to 50

for (var i=2 ; i<=array.length-1; i++) {
    if((i%2===0) || (i%3===0))
        continue;
    console.log(i+",");
}

})
//readline function is used to get the input from the user.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('enter any prime number?', number => {

//if conditionals are used to check the number(which is the input).  

   if(number %4 == 0) 
   {
   console.log('success!');
   }
   
   else
   {
   console.log('Better luck Next time !');
   }

  readline.close();
});
//readline.close is the method to end the readline function.

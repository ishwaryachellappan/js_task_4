let promise = new Promise(function(resolve, reject) {
  

      const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('enter millisecond ', (answer) => {
  // TODO: Log the answer in a database
  if(answer %7 == 0){
  console.log("success");
  }
  else{
    console.log("better luck next time!")
  }
  rl.close();
});
 });     
      
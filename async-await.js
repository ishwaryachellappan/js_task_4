function generateRandom() {
  return new Promise((res, rej) => {
    let randomNumber = Math.random() * (1000 - -1000) + -1000;
    res(randomNumber);
  });
}
function compareRandom(firstRandomNumber, secondRandomNumber) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if ((firstRandomNumber + secondRandomNumber) > 0) {
        res(true);
      } else {
        rej(false);
      }
    }, 0);
  });
}
async function main() {
  let firstRandomNumber = await generateRandom();
  let secondRandomNumber = await generateRandom();
  try {
    let result = await compareRandom(firstRandomNumber, secondRandomNumber);
    console.log("User Logged in successfully!");
  } catch (e) {
    console.log("Oops! try again!");
  }
}
main();
function checkPrime(params) {
  let isPrime = true;
  if (params <= 1) {
    console.log("Prime numbers are greater than 1.");
  } else {
    for (let i = 2; i < Math.sqrt(params); i++) {
      if (params % i === 0) {
        isPrime = false;
        console.log(`${params} isn't a prime number.`);
        break;
      } else {
        console.log(`${params} is a prime number.`);
      }
    }
  }
}
checkPrime(20); // Enter your input here

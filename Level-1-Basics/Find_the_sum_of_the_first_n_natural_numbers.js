function sumOfNumbers(params) {
  let output = 0;
  for (let i = 1; i <= params; i++) {
    output += i;
  }
  console.log(`The answer is ${output}`);
}
sumOfNumbers(5); // Give your input here

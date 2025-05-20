function factorialProgram(params) {
  let output = 1;
  for (let i = params; i > 0; i--) {
    output *= i;
  }
  console.log(`The factorial of ${params} is ${output}`);
}

factorialProgram(6); // Enter your input here

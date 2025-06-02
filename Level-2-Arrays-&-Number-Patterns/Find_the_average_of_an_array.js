function avgOfArray(params) {
  let sum = 0;
  for (let index = 0; index < params.length; index++) {
    sum += params[index];
  }
  let ans = sum / params.length;
  console.log(`The average of this array is ${ans}`);
}
avgOfArray([1, 2, 3, 4, 5]); // Enter your input here

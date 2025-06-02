function sumOfElements(params) {
  let sum = 0;
  for (let index = 0; index < params.length; index++) {
    sum += params[index];
  }
  console.log(`The sum of elements in this array is ${sum}`);
}
sumOfElements([1, 2, 3, 4, 5]); // Enter your input here

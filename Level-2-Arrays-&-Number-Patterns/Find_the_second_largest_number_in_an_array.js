function secondLargestNumber(params) {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < params.length; i++) {
    if (params[i] > largest) {
      secondLargest = largest;
      largest = params[i];
    } else if (params[i] > secondLargest && params[i] !== largest) {
      secondLargest = params[i];
    }
  }

  console.log(`The second largest number in this array is ${secondLargest}`);
}
secondLargestNumber([12, 18, 11, 15, 19, 17, 13, 10]); // Enter your input here

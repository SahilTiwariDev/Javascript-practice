function countRepeatedNumber(params) {
  let count = {};

  for (let i of params) {
    if (count[i]) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  }

  console.log(count);
}
countRepeatedNumber([1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9]); // Enter your input here

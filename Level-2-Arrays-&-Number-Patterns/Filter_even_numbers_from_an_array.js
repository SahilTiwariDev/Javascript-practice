function evenNumbers(params) {
  let newArr = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i] % 2 === 0) {
      newArr.push(params[i]);
    }
  }
  console.log(newArr);
}
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Enter your input here

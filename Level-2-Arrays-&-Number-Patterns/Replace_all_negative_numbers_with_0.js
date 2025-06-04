function replaceNegatives(params) {
  let newArray = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i] < 0) {
      newArray.push(0);
    } else {
      newArray.push(params[i]);
    }
  }
  console.log(newArray);
}

replaceNegatives([1, 4, 6, -2, 2, -1, 3, -9, 9, -7, 8, -3]); // Enter your input here

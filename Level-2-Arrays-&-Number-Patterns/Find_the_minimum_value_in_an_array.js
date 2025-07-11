function findSmallest(params) {
  let min = params[0];

  for (let i = 1; i < params.length; i++) {
    if (params[i] < min) {
      min = params[i];
    }
  }

  console.log(min);
}
findSmallest([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Enter your input here

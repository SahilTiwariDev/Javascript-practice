function valueSeparation(params) {
  let positiveValues = [];
  let negativeValues = [];
  let zeros = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] === 0) {
      zeros += 1;
    } else if (params[i] < 0) {
      negativeValues.push(params[i]);
    } else {
      positiveValues.push(params[i]);
    }
  }
  console.log(
    `The positive values in the array are ${positiveValues}, the negative values in the array are ${negativeValues}, and there are ${zeros} zeros.`
  );
}
valueSeparation([0, -2, 5, 7, -9, 0, 4, -1, 0, 3, -6]); // Enter your input here

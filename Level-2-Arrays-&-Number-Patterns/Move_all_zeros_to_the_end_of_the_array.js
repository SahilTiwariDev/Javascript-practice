function moveZero(params) {
  let zero = [];
  let nonZero = [];
  let answer = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i] === 0) {
      zero.push(0);
    } else {
      nonZero.push(params[i]);
    }
  }
  answer = nonZero.concat(zero);
  console.log(answer);
}
moveZero([1, 2, 0, 4, 3, 0, 5, 0, 7]); // Enter your input here

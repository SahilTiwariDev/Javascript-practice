function reverseString(params) {
  let answer = "";
  for (let i = params.length - 1; i >= 0; i--) {
    answer += params[i];
  }
  console.log(answer);
}
reverseString("lihaS"); // Give your input here

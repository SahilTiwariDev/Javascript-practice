function name(params) {
  let actualNumber = params.toString();
  let newNumber = "";
  for (let i = actualNumber.length - 1; i >= 0; i--) {
    newNumber = newNumber + actualNumber[i];
  }
  console.log(Number(newNumber));
}
name(7890); // Enter your input here. 
// (Note that JavaScript does not support numbers with leading zeros, except 0 itself or Octal literals So If you write a number that ends with zero, in the output the leading zero will always be removed, because JavaScript treats it as unnecessary in numbers.)

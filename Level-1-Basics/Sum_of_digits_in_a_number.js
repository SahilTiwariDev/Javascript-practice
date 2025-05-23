function sumOfDigits(params) {
  let numberLenght = params.toString();
  let sumOfDigits = 0;
  for (let i = 0; i < numberLenght.length; i++) {
    sumOfDigits += Number(numberLenght[i]);
  }
  console.log(sumOfDigits);
}
sumOfDigits(12345); // Give your input here

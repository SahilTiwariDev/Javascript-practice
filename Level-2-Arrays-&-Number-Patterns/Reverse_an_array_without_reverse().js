function reverseArray(params) {
  let newArray = [];
  for (let i = params.length - 1; i >= 0; i--) {
    newArray.push(params[i]);
  }
  console.log(`The reversed array is: ${newArray}`);
}
reverseArray([9, 8, 7, 6, 5, 4, 3, 2, 1]); // Enter your input here

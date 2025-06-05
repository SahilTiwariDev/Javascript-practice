function rotateArray(params) {
  params.unshift(params[params.length - 1]);
  params.pop();
  console.log(`Here's the array after rotating: ${params}`);
}
rotateArray([2, 3, 4, 5, 6, 7, 8, 9, 1]); // Enter your input here

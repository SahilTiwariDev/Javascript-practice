function findAverage(params) {
  let number = params.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  let answer = sum / number.length;
  console.log(`The average of ${params} is ${answer}.`);
}
findAverage(12345); // Enter your input here

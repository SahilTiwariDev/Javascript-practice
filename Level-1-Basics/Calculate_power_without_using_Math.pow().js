function calculatePower(number, power) {
  let answer = 1;
  for (let i = 1; i <= power; i++) {
    answer = answer * number;
  }
  console.log(`${number} ^ ${power} = ${answer}`);
}
calculatePower(2, 8); // Enter your input here

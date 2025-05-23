function multiplicationTable(number, iteration) {
  for (let i = 1; i <= iteration; i++) {
    let output = number * i;
    console.log(`${number} x ${i} = ${output}`);
  }
}
multiplicationTable(2, 10); // Give your input here

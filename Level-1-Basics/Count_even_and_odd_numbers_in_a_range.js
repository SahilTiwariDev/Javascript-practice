function oddEvenCounter(paramsInit, paramsEnd) {
  let oddCount = 0;
  let evenCount = 0;
  for (let i = paramsInit; i <= paramsEnd; i++) {
    if (i % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  console.log(`Total number of odd numbers is ${oddCount}`);
  console.log(`Total number of even numbers is ${evenCount}`);
}
oddEvenCounter(1, 20);

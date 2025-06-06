function findDuplicates(params) {
  let duplicates = [];

  for (let i = 0; i < params.length; i++) {
    for (let j = i + 1; j < params.length; j++) {
      if (params[i] === params[j] && !duplicates.includes(params[i])) {
        duplicates.push(params[i]);
        break;
      }
    }
  }

  console.log(`The duplicate values are ${duplicates}`);
  console.log("Original: " + params);
}
findDuplicates([1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9]); // Enter your input here

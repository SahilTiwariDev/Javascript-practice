function largestOfThree(paramA, paramB, paramC) {
  if (paramA > paramB && paramA > paramC) {
    console.log(`Largest of them is ${paramA}`);
  } else if (paramB > paramA && paramB > paramC) {
    console.log(`Largest of them is ${paramB}`);
  } else {
    console.log(`Largest of them is ${paramC}`);
  }
}
largestOfThree(1, 2, 3); // Enter your input here

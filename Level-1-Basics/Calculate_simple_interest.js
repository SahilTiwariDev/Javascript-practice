function interestCalculator(paramAmount, paramROI, paramTime) {
  let interest = (paramAmount * paramROI * paramTime) / 100;
  console.log(
    `Investing ₹${paramAmount} for ${paramTime} years at ${paramROI}% interest will earn ₹${interest}.`
  );
}
interestCalculator(100000, 7, 5); // Enter your input here

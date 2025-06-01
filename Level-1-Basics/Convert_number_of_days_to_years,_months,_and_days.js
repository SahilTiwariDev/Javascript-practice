function daysCounter(params) {
  let leftDays = 0;
  let years = Math.floor(params / 365);
  leftDays = params - 365 * years;
  let months = Math.floor(leftDays / 30);
  leftDays = leftDays - 30 * months;
  let days = leftDays;
  console.log(
    `There are ${years} years, ${months} months and ${days} days present.`
  );
}
daysCounter(2000); // Enter your input here

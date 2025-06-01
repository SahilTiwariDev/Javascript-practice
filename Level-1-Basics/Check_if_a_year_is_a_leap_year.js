function leapYear(params) {
  if ((params % 4 === 0 && params % 100 !== 0) || params % 400 === 0) {
    console.log(`The year ${params} is a leap year`);
  } else {
    console.log(`The year ${params} isn't a leap year`);
  }
}
leapYear(2000); // Enter your input here

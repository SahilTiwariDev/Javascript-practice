function checkPalindrome(params) {
  let newNumber = params.toString();
  let reversrNumber = "";
  for (let i = newNumber.length - 1; i >= 0; i--) {
    reversrNumber += newNumber[i];
  }
  if (reversrNumber === newNumber) {
    console.log(`The Number ${params} is a palindrome number.`);
  } else {
    console.log(`The Number ${params} isn't a palindrome number.`);
  }
}
checkPalindrome(121); // Enter your input here

function checkPalindrome(params) {
  let reverseStr = "";
  for (let i = params.length - 1; i >= 0; i--) {
    reverseStr += params[i];
  }
  if (reverseStr === params) {
    console.log(`${params} is a palindrome.`);
  } else {
    console.log(`${params} isn't a palindrome.`);
  }
}
checkPalindrome("madam"); // Enter your input here
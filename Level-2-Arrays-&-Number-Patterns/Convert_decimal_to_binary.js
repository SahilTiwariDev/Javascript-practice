function decimalToBinary(params) {
  let binary = "";

  while (params > 0) {
    binary = (params % 2) + binary;
    params = Math.floor(params / 2);
  }
  console.log(binary);
}

decimalToBinary(13); // Enter your input here

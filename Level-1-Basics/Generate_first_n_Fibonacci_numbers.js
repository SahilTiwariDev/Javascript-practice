function fibonacci(params) {
  let a = 0,
    b = 1;

  for (let i = 0; i < params; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}
fibonacci(10); // Enter your input here

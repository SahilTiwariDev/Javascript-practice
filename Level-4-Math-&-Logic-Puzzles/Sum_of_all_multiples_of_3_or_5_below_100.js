let range = 100; // Change if you want
let answer = 0;
for (let i = 0; i < range; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    answer += i;
  }
}
console.log(answer);

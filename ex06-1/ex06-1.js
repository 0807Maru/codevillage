const pull5 = x => x - 5;
const add3 = x => x + 3;
const mul8 = x => x * 8;

const n = 1;

console.log(pull5(n * 100));  // => n * 100 - 5
console.log(add3(mul8(add3(n))));  //  (n + 3) * 8 + 3


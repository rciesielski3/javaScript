function saySomething(text) {
  console.log(text);
}

let res1 = saySomething("Dzień dobry!");
console.log("Result of res: ", res1);
// w odpowiedzi otrzymamy:
// "Dzień dobry!"
// "Result of res: ", undefined

function multiply(x, y) {
  return x * y;
}

let res2 = multiply(2, 7);
console.log("Result of res: ", res2);

// w odpowiedzi zostanie zwrócone:
// "Result of res: ", 14

// Hoisting - deklaracja funkcji oraz zmienne typu var przed wykonaniem kodu zostają przenoszone na samą górę strony
console.log("sum", sum());

function sum() {
  return 2 + 2;
}
function undefined() {
  console.log(abc); // ReferenceError: abc is not defined
  let xyz;
  console.log(xyz); // undefined
}

x = 100;
var x;
console.log(x);

var a;
let b;
console.log(a); // undefined
console.log(b); // error

// let lub const tam, gdzie jest to możliwe!
// var mają możliwość hoistingu co oznacza, że są one dostępne nawet przed ich deklaracją wewnątrz funkcji.

console.log("DODAWANIE");

let x = 5;
let y = 10;
let z = x + y; // wynik: 15

let a = "Hello";
let b = "World";
let c = a + " " + b; // wynik: "Hello World"

console.log("z = x + y " + c);
console.log('c = a + " " + b -> ' + c);

console.log("ODEJMOWANIE");

let x2 = 5;
let y2 = 10;
let z2 = y2 - x2; // wynik: 5

console.log("z2 = y2 - x2 -> " + (z2 = y2 - x2));

console.log("MNOŻENIE");

let x3 = 5;
let y3 = 10;
let z3 = x3 * y3; // wynik: 50

console.log("z3 = x3 * y3 -> " + (z3 = x3 * y3));

console.log("DZIELENIE");

let x4 = 50;
let y4 = 10;
let z4 = x4 / y4; // wynik: 5

console.log("z4 = x4 / y4 -> " + (z4 = x4 / y4));

console.log("RESZTA");

let x5 = 7;
let y5 = 3;
let z5 = x5 % y5; // wynik: 1

console.log("z5 = x5 % y5 -> " + (z5 = x5 % y5));

console.log("INKREMENTACJA I DEKREMENTACJA");

let x7 = 5;
x7++; // wartość x teraz wynosi 6
x7--; // wartość x teraz wynosi 5

console.log("x7++ -> " + x7++);
console.log("x7-- -> " + x7--);

console.log("Postinkrementacja");

let x8 = 5;
let y8 = x8++; // y wynosi 5, x wynosi 6

console.log("y8 = x8++ -> " + y8);

console.log("Preinkrementacja");

let x9 = 5;
let y9 = ++x9; // y wynosi 6, x wynosi 6

console.log("y9 = ++x9 -> " + y9);

console.log("LOGICZNY AND");

let x10 = 5;
let y10 = 10;
if (x10 > 0 && y10 > 0) {
  console.log("Obie wartości są dodatnie");
}

console.log("LOGICZNY OR");

let x11 = 5;
let y11 = -10;
if (x11 > 0 || y11 > 0) {
  console.log("Przynajmniej jedna wartość jest dodatnia");
}

console.log("LOGICZNY NOT");
const boolean = !true; // zwróci wartość false

let x12 = 5;
if (!(x12 > 10)) {
  console.log("x nie jest większe niż 10");
}

console.log("LOGICZNY AND i NOT");
let x13 = 5;
if (x13 > 0 && !(x13 > 10)) {
  console.log("x jest w przedziale od 0 do 10");
}

console.log("Zadania praktyczne");
let wynik = 5 + 3;
console.log("wynik = 5 + 3 = " + wynik);

let wynik2 = 5 - 3;
console.log("wynik = 5 - 3 = " + wynik2);

let wynik3 = 5 * 3;
console.log("wynik = 5 * 3 = " + wynik3);

let wynik4 = 5 / 3;
console.log("wynik = 5 / 3 = " + wynik4);

let wynik5 = (10 + 5) * 2;
console.log("wynik = (10 + 5) * 2 = " + wynik5);

let x0 = 5;
if (x0 > 3 && x0 < 10) {
  console.log(
    "AND (x0 > 3 && x0 < 10): " + x0 + " jest w przedziale od 3 do 10"
  );
}

if (x0 > 6 || x0 < 6) {
  console.log("OR (x0 > 6 || x0 < 6): " + x0 + " jest w przedziale od 6 do 6");
}

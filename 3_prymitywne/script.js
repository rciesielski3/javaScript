console.log("Witaj"); //zwraca tekst Witaj

console.log("Dzień dobry!"); //zwraca tekst Dzień dobry!

let firstName = "Alojzy";
console.log(`Mam na imię ${firstName}.`); //zwraca tekst Mam na imię Alojzy.

console.log("___________");
console.log("Number");
console.log("___________");
// x jest typu number i przechowuje wartość 10
let x = 10;

// y jest typu number i przechowuje wartość 3.14
let y = 3.14;

// z jest typu number i przechowuje wartość -5
let z = -5;

// b jest typu number i przechowuje wartość NaN
let b = "hello" / 2;

console.log("x " + x);
console.log("y " + y);
console.log("z " + z);
console.log("b " + b);

console.log("___________");
console.log("Boolean");
console.log("___________");

let x1 = true; // x jest typu boolean i przechowuje wartość true
let y1 = false; // y jest typu boolean i przechowuje wartość false

// Operator ! neguje aktualną wartość zmiennej
let a = true;
let b1 = !a; // b jest typu boolean i przechowuje wartość false

console.log("x1 = true: " + x1);
console.log("y1 = false: " + y1);
console.log("a = true: " + a);
console.log("b1 = !a: " + b1);

console.log("___________");
console.log("Undefined");
console.log("___________");

//deklarujemy zmienną "x" do której nie przypisujemy domyślnie żadnej wartości
let x2;

console.log("let x2; " + x2); // zwróci "undefined"

console.log("___________");
console.log("Null");
console.log("___________");

let myVariable = null;

console.log("myVariable = null; " + myVariable); // zwróci "null"

console.log("___________");
console.log("Symbol");
console.log("___________");

let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1 === symbol2); // false

console.log("___________");
console.log("TypeOf");
console.log("___________");

console.log("typeof(myVariable) " + typeof myVariable);
console.log("typeof(x1) " + typeof x1);
console.log("typeof(a) " + typeof a);
console.log("typeof(z) " + typeof z);
console.log("typeof(firstName) " + typeof firstName);

console.log("___________");
console.log("KALKULATOR");
console.log("___________");

let q = 2;
let w = 5;
let e = 7;

var hello = "Hello";
var world = "world";

console.log("'hello' " + hello);
console.log('"world" ' + world);

console.log("5 / 0 = " + 5 / 0);
console.log("'tekst' / 2 = " + "tekst" / 2);

console.log("5 > 3 " + 5 > 3);
console.log("2 === 2" + 2 === 2);
console.log("1 < 0" + 1 < 0);

console.log("Boolean(0) " + Boolean(0));
console.log("Boolean('') " + Boolean(""));
console.log("Boolean('tekst') " + Boolean("tekst"));

let zmienna;
console.log("zmienna " + zmienna);

let zmiennaB = null;
console.log("zmiennaB " + zmiennaB);

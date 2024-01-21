var car = "expensive car";
const bike = "your red bike";
let house = "my new house";

let name = "John"; // zasięg globalny

if (name === "John") {
  let message = "Hello, John!"; // zasięg lokalny
  console.log(message); // Output: Hello, John!
}

// console.log(message); // ReferenceError: message is not defined

var liczba = "2";
let tekst = "losowy tekst";
const obiekt = "obiekt";

console.log("liczba " + liczba);
console.log("tekst " + tekst);
console.log("obiekt " + obiekt);

tekst = "nowy losowy tekst";
console.log("newTekst " + tekst);

obiekt = "obiekt2";
console.log("newObiekt " + obiekt);

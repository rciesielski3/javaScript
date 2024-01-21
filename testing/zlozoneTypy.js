function friuts() {
  const fruits = ["apple", "banana", "cherry"];
  console.log(fruits);
  fruits[2] = "orange";
  console.log(fruits);
  fruits.push("grapes");
  console.log(fruits);
}

friuts();

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    console.log("The car is starting");
  },
};

function cars() {
  console.log(car.brand);
  console.log(car.start());
}

cars();

let a = 10;
let b = a;
a = 15;
function copy() {
  console.log(a); // 10
  console.log(b); // 10
}

copy();

const x = { value: 5 };
const y = x;
// y.value = 10;
function reference() {
  console.log(x.value); //10
  console.log(y.value); //10
}
reference();

const klasa = [
  "Jan Kowalski",
  "Adam Kownacki",
  "Krystyna Czubówna",
  "Adam Mickiewicz",
  "Jan Łuka",
  "Michał Wnyka",
];

function doOdpowiedzi() {
  const uczenDoOdpowiedzi = klasa[1]; // pamiętaj, że elementy tablicy zaczynamy liczyć od 0!
  console.log(uczenDoOdpowiedzi);
}
doOdpowiedzi();

let fruits = ["banana", "apple", "orange"];
let numberOfFruits = fruits.length;

function friutsArray() {
  console.log("numberOfFruits", numberOfFruits);
  // Output: 3
  fruits[fruits.length] = "kiwi";
  console.log("fruits", fruits);
  // Output: ['banana', 'apple', 'orange', 'kiwi']
}

friutsArray();

function friutsPush() {
  const newArrayLength = fruits.push("awokado");
  console.log("friutsPush", fruits);
  // Output: ['banana', 'apple', 'orange', 'kiwi', 'awokado']
  console.log("friutsPush newArrayLength", newArrayLength);
  // Output: 5
}
friutsPush();

function friutsPop() {
  let removedFruit = fruits.pop();
  console.log("friutsPop", fruits);
  // Output: ['banana', 'apple', 'orange', 'kiwi']
  console.log("friutsPop removedFruit", removedFruit);
  // Output: 'awokado'
}

friutsPop();

function friutsShift() {
  let removedFruit = fruits.shift();
  console.log("friutsShift", fruits);
  // Output: ['apple', 'orange', 'kiwi']
  console.log("friutsShift removedFruit", removedFruit);
  // Output: 'banana'
}

friutsShift();

function friutsUnshift() {
  const newArrayLength = fruits.unshift("peach");
  console.log("friutsUnshift", fruits);
  // Output: ['peach', 'apple', 'orange', 'kiwi']
  console.log("friutsUnshift newArrayLength", newArrayLength);
  // Output: 4
}
friutsUnshift();

function friutsSlice() {
  let slicedFruits = fruits.slice(1, 3);
  console.log("friutsSlice", fruits);
  // Output: ['peach', 'apple', 'orange', 'kiwi']
  console.log("friutsSlice slicedFruits", slicedFruits);
  // Output: ['apple', 'orange']
}
friutsSlice();

function friutsSplice() {
  let removedFruits = fruits.splice(1, 2, "grapes");
  console.log("friutsSplice", fruits);
  // Output: ['peach', 'grapes', 'kiwi']
  console.log("friutsSplice removedFruits", removedFruits);
  // Output: ['apple', 'orange']

  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "Feb");
  // Inserts at index 1
  console.log(months);
  // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

  months.splice(4, 1, "May");
  // Replaces 1 element at index 4
  console.log(months);
  // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
}
friutsSplice();

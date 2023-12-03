// Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
const number = 8;
console.log(number);
// b) Utwórz zmienną typu string przechowującą twoje imię.
let name = "Rafal";
console.log(name);
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let variable;
variable = "obiekt";
console.log(variable);
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const obiekt = { name: "Rafal", age: 18 };
console.log(obiekt);
console.log("name: " + obiekt.name + ", age: " + obiekt.age);
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let logic1 = true;
const logic2 = false;
console.log(logic1 + " " + logic2);
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let sum = 15 + 11;
console.log(sum);
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
let nameSurname = "Rafał Ciesielski";
console.log(nameSurname);
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let floatNumber = 3.141592653589;
console.log(floatNumber);
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let mathSum = 34 + 17;
console.log(mathSum);
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
const city = "Masecjusecz!";
console.log(city);
// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
let tablica = [10, "10", true];
console.log(tablica[0] + ", " + tablica[1] + ", " + tablica[2]);
console.log(
  typeof tablica[0] + ", " + typeof tablica[1] + ", " + typeof tablica[2]
);
// b) Stwórz obiekt car z właściwościami make, model i year.
var Car = { marka: "Ford", model: "Mustang", year: "1965" };
console.log(Car.marka + " " + Car.model + " " + Car.year);
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
let tableNumber = [3, 432, 8477575];
console.log(tableNumber);
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
let Person = { name: "Hubert", age: 18, isStudent: true };
console.log(Person);
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let Colour;
Colour = { color: "Red" };
console.log(Colour.color);
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
var animal = new Array();
animal[0] = { name: "Horse", age: 10 };
animal[1] = { name: "Dog", age: 59 };
animal[2] = { name: "Duck", age: 7 };
console.log(animal);
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
let boolenTable = [true, false, true, true, true];
console.log(boolenTable);
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
let studentTable = new Array();
studentTable[0] = { name: "Adam", grades: [3, 3, 2, 2, 5, 5], isActive: true };
studentTable[1] = {
  name: "Christof",
  grades: [5, 4, 4, 3, 2, 2],
  isActive: true,
};
studentTable[2] = { name: "Bart", grades: [5, 2, 2, 4, 2, 2], isActive: false };
studentTable[3] = { name: "Deo", grades: [2, 2, 2, 4, 3, 3], isActive: false };
console.log(studentTable);
// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
let differentTable = [
  true,
  { marka: "Ford", model: "Mustang", year: "1965" },
  10,
  "tojestTablica",
];
console.log(differentTable);
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
let objectBook = {
  title: "myBook",
  author: "randomAuthor",
  yearPublished: 2056,
};
console.log(objectBook);
console.log(
  objectBook.title + " " + objectBook.author + " " + objectBook.yearPublished
);
// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
var variable2 = 11;
if (variable2 > 10) {
  console.log(variable2 + " jest większa od 10");
} else {
  console.log("jest mniejsza od 10");
}
// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
var variable3 = "Hello";
if ((variable3 = "Hello")) {
  console.log("Hello is hello!");
} else {
  console.log("to nie jest Hello tylko " + variable3);
}
// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const age = 20;
const checkAge = age >= 21 ? "Pełnoletni" : "niePełnoletni";
console.log(checkAge);
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
var ageNumber = 18;
if (ageNumber >= 18) {
  console.log(ageNumber + " jest większa od 18");
} else {
  console.log("jest mniejsza od 18");
}
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let tab;
if (tab == null) {
  console.log("Tablica jest pusta");
} else {
  console.log("Twoja tablica to: " + tab);
}
// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let isMember = false;
let discount = isMember ? 30 : 0;
console.log("discount: " + discount + "%");
// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
let myVariable = "String";
if (myVariable.length > 5) {
  console.log("myVariable has " + myVariable.length + " characters");
} else {
  console.log("myVariable is short than 5 characters");
}
// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let isEven = 6;
if (isEven % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
let black = false;
let isBalck = black ? "yes" : "no";
console.log("It is black: " + isBalck);
// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let objKey = { name: "John" };

if (objKey.name != null) {
  console.log("Your name is: " + objKey.name);
} else {
  console.log("objKey.name is empty");
}

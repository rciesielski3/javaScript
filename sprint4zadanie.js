//Podstawy funkcji w JavaScript.
// Wyświetl wyniki w konsoli

//PODSTAWY FUNKCJI:
// 1. Napisz funkcję dodającą dwie liczby
function sum(a, b) {
  return a + b;
}
console.log(sum(473736, 33));

// 2. Napisz funkcję zwracającą długość tablicy
function arrayLength(array) {
  return array.length;
}
console.log(arrayLength("test", 213532, false));

// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
function evenOddNumber(number) {
  return number % 2 == 0 ? "even" : "odd";
}
console.log(evenOddNumber(235));

// 4. Napisz funkcję obliczającą pole kwadratu
function squareArea(number) {
  return (area = Math.pow(number, 2));
}
console.log(squareArea(23));

// 5. Napisz funkcję zwracającą odwrotność liczby
function inverseNumber(number) {
  if (number > 0) {
    console.log("inverseNumber: 1/" + number);
  } else if (number < 0) {
    console.log("inverseNumber: -(1/" + (number *= -1) + ")");
  } else {
    console.log("inverse number cannot be zero!");
  }
}
inverseNumber(3);

// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
function convertCtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(convertCtoF(234));

// 7. Napisz funkcję zwracającą pierwszy element tablicy
function firstElement() {
  const array = ["Hello", true, 124214];
  return array[0];
}
console.log(firstElement());

// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
function connectString(string1, string2) {
  if (
    (typeof string1 === "string" || string1 instanceof String) &&
    (typeof string2 === "string" || string2 instanceof String)
  ) {
    return (connectedStrings = string1 + string2);
  } else {
    console.log("!string");
  }
}
console.log(connectString("string1", "Hello"));

// 9. Napisz funkcję zwracającą typ zmiennej
function type(variable) {
  return typeof variable;
}
console.log(type(2335));

// 10. Napisz funkcję zwracającą absolutną wartość liczby
function absolut(number) {
  return Math.abs(number);
}
console.log(absolut(-214));

//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function count() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
count();

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
function even20() {
  let n = 0;
  while (n < 20 && n % 2 == 0) {
    console.log(n);
    n++;
  }
}
even20();

// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function number10to1() {
  let result;
  let i = 10;
  do {
    console.log(i--);
  } while (i > 0);
}
number10to1();

// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function number5() {
  let i = 0;
  while (i < 10) {
    if (i === 5) {
      console.log(i);
      break;
    }
    i++;
  }
}
number5();

// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
function objSettings() {
  const object = { 1: 1, 2: true, 3: "balon" };
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
}
objSettings();

// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
function arrayElements() {
  const array = ["elementA", "elementB", "elementC"];

  for (const element of array) {
    console.log(element);
  }
}
arrayElements();

// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
function arrayElementSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(arrayElementSum([123, 13]));

// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków
function reverse(characters) {
  let i = characters.length;
  while (i--) {
    reverse = characters[i];
    console.log(reverse);
  }
}
reverse("Maserati");

// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
function maxNumberInArray(array) {
  for (const element of array) {
    return Math.max.apply(null, array);
  }
}
console.log(maxNumberInArray([234, 2, 23435, 23552]));

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
function keyValue(array) {
  for (const key in array) {
    console.log(`${key}: ${array[key]}`);
  }
}
console.log(keyValue([1, true, 12412424, "Hello"]));

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
function addElementToArray() {
  const array = [true, 12, "12421"];
  withAdded = array.push(false);
  return array;
}
console.log(addElementToArray());

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
function removeElementFromArray() {
  const array = [true, 12, "12421"];
  withRemoved = array.pop();
  return array;
}
console.log(removeElementFromArray());

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
function removeElementFromArrayUsingShift() {
  const cars = ["Mercedes", "Opel", "Ford", "Renault"];
  cars.shift();
  return cars;
}
console.log(removeElementFromArrayUsingShift());

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
function addElementToArrayUsingUnshift() {
  const cars = ["Mercedes", "Opel", "Ford", "Renault"];
  cars.unshift("Honda");
  return cars;
}
console.log(addElementToArrayUsingUnshift());

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
function add2ElementsToArray(element1, element2) {
  const cars = ["Mercedes", "Opel", "Ford", "Renault"];
  cars.push(element1, element2);
  return cars;
}
console.log(add2ElementsToArray("Nissan", "BMW"));

// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
function remove2ElementsFromArray() {
  const cars = ["Mercedes", "Opel", "Ford", "Renault", "Fiat", "Fererri"];
  for (i = 0; i < cars.length - 2; i++) {
    cars.pop();
  }
  return cars;
}
console.log(remove2ElementsFromArray());

// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
function remove2ElementsFromArrayUsingShift() {
  const cars = ["Mercedes", "Opel", "Ford", "Renault", "Fiat", "Fererri"];
  for (i = 0; i < cars.length - 2; i++) {
    cars.shift();
  }
  return cars;
}
console.log(remove2ElementsFromArrayUsingShift());

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
function add2ElementsToArrayUsingUnshift(elementA, elementB) {
  const cars = ["Mercedes", "Opel", "Ford", "Renault", "Fiat", "Fererri"];
  const newCars = [elementA, elementB];
  for (i = 0; i < newCars.length; i++) {
    cars.unshift(newCars[i]);
  }
  return cars;
}
console.log(add2ElementsToArrayUsingUnshift("Mini", "Citroen"));

// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
function addAndRemoveElementFromArray(mark) {
  let cars = ["Mercedes", "Opel", "Ford", "Renault", "Fiat", "Fererri"];
  cars.push(mark);
  cars.pop();
  return cars;
}
console.log(addAndRemoveElementFromArray("Bugatti"));

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
function unshiftAndShiftElementFromArray(mark) {
  let cars = ["Mercedes", "Opel", "Ford", "Renault", "Fiat", "Fererri"];
  cars.unshift(mark);
  cars.shift();
  return cars;
}
console.log(unshiftAndShiftElementFromArray("Bugatti"));

// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
function mapAddOne() {
  const numbers = [2, 5, 8, 9];
  const numbersMap = numbers.map((x) => x + 1);
  return numbersMap;
}
console.log(mapAddOne());

// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
function filterEvenNumbers() {
  const numbers = [2, 5, 8, 9];
  const numbersEven = numbers.filter((x) => x % 2 == 0);
  return numbersEven;
}
console.log(filterEvenNumbers());

// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
function mapDoubleElement() {
  const numbers = [2, 5, 8, 9];
  const numbersMap = numbers.map((x) => x * 2);
  return numbersMap;
}
console.log(mapDoubleElement());

// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
function filterNumbersGreaterThan10() {
  const numbers = [2, 5, 8, 9, 14, 142, 742];
  const numbersMap = numbers.filter((x) => x > 10);
  return numbersMap;
}
console.log(filterNumbersGreaterThan10());

// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
function splitStringToWords(stringInput) {
  const splits = stringInput.split(" ");
  return splits;
}
console.log(splitStringToWords("My long string to split"));

// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
function stringToLength() {
  const array = ["true", "2212342", "Hello"];
  const newArray = [];

  for (i = 0; i < array.length; i++) {
    let convertedElements = array.map((x) => x.length);
    newArray.push(convertedElements[i]);
  }
  return newArray;
}
console.log(stringToLength());

// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
function filterOddNumbers() {
  const numbers = [2, 5, 8, 9];
  const numbersOdd = numbers.filter((x) => x % 2 != 0);
  return numbersOdd;
}
console.log(filterOddNumbers());

// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
function mapSquaredElement() {
  const numbers = [2, 5, 8, 9];
  const numbersMap = numbers.map((x) => Math.pow(x, 2));
  return numbersMap;
}
console.log(mapSquaredElement());

// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
function filterStringMoreThan3Characters() {
  const cars = ["Mercedes", "MG", "Ford", "Kia", "Fiat", "Fererri"];
  const carsFilter = cars.filter((x) => x.length > 3);
  return carsFilter;
}
console.log(filterStringMoreThan3Characters());

// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
function mapCapitalLetters() {
  const cars = ["Mercedes", "MG", "Ford", "Kia", "Fiat", "Fererri"];
  const carsMap = cars.map((x) => x.toUpperCase());
  return carsMap;
}
console.log(mapCapitalLetters());

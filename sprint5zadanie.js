// // ZAD 1 //

// Dane wejściowe //
const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "ad",
    lastName: "cq",
  },
];

// Napisz funkcję, która przetwarza każdą osobę w tablicy people w następujący sposób:
// a) Dla każdego imienia, weź ostatnie 3 litery, odwróć ich kolejność i zapisz do zmiennej.

const getThreeLettersOfNameAndRevert = (arrayElemets) => {
  const firstName = arrayElemets.map((name) => name.firstName);
  const changedName = firstName.map((name) => name.slice(-3));
  const revertName = changedName.map((revertString) =>
    revertString.split("").reverse().join("").toLowerCase()
  );
  return revertName;
};
const revertStringOfName = getThreeLettersOfNameAndRevert(people);

// b) Dla każdego nazwiska, weź pierwsze 3 litery, zamień miejscami pierwszą i ostatnią literę, i dołącz do zmiennej utworzonej w punkcie a).

const getThreeLettersOfSurnameAndRevert = (arrayElemets) => {
  const lastName = arrayElemets.map((last) => last.lastName);
  const changedLast = lastName.map((last) => last.slice(0, 3));
  const revertLast = changedLast.map((revertString) =>
    revertString.split("").reverse().join("").toLowerCase()
  );
  return revertLast;
};
const revertStringOfLast = getThreeLettersOfSurnameAndRevert(people);

// c) Zmień wielkość liter w taki sposób, aby ostateczny pseudonim (nickname) zaczynał się wielką literą, a reszta liter była mała.
function capitalized() {
  people.forEach((element, index) => {
    people[index] =
      element.firstName.charAt(0).toUpperCase() + element.lastName.slice(1);
  });
  return people;
}
const toUpperCase = capitalized(people);

// d) Jeśli liczba znaków w imieniu lub nazwisku jest mniejsza niż 2, pseudonim będzie odpowiednio krótszy.
const addNick = (arrayElements) => {
  for (i = 0; i < arrayElements.length; i++) {
    arrayElements[i].nickname = addNick[i];
  }
};
addNick(people);

// // ZAD 2 //

// Dane wejściowe
const people2 = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
    nickname: "Anilam",
  },
];

// Rozszerz funkcję z poprzedniego zadania:
// Dodaj pole age, które jest wyliczane na podstawie sumy liter w imieniu i nazwisku. Jeżeli ilość liter w imieniu i
// nazwisku jest parzysta to wiek będzie będzie wyliczany, na postawie długości kluczy znajdujących się w obiekcie pomniejszone o długość imienia.
let countNameAndSurname;
function ageCalculator() {
  people2.forEach((element, index) => {
    element.age =
      people2[index].firstName.length + people2[index].lastName.length;
    if (people2[index].age % 2 == 0) {
      element.age = element.age - people2[index].firstName.length;
    }
  });

  return people2;
}
ageCalculator();
// // Zad 3 //

// Dane Wejściowe
const people3 = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
    age: 19,
    introduceYourself: function () {
      return `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}].`;
    },
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
    introduceYourself: function () {
      return `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}].`;
    },
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
    nickname: "Ramlam",
    age: 17,
    introduceYourself: function () {
      return `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}].`;
    },
  },
];

//     a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
//     Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
//     "Cześć jestem Alicja Kowalska, ale w szkole mówią na mnie [Ajcwok]."
// function introduceYourself() {
//   for (i = 0; i < people3.length; i++) {
//     console.log(people3[i].introduceYourself());
//   }
// }
// introduceYourself();
//     b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
//     pojawić się tekst powitalny dla każdej osoby w tablicy

function introduceYourself() {
  people3.forEach((element, index) => {
    console.log(people3[index].introduceYourself());
  });
}
introduceYourself();

// ZAD 4.

//  // Dane wejściowe //
//  [{
//     firstName: "Alicja",15
//     lastName: "Kowalska",15
//     nickname: "Ajcwok"15
//     age:19
//     introduceYourself: // funkcja //
//     }
//     itd ... ]

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

// Napisz funkcję, która :
//     a) przyjmie parametr typu number z zakresu 1 - 30
let parameterNumber = 0;
function randomNumber() {
  return (parameterNumber = Math.random() * (30 - 1) + 1);
}
//     b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
function randomNumber2(number) {
  if (number <= 30 && number > 0) {
    return (parameterNumber = Math.random() * number);
  } else {
    console.log("Provide proper number!");
  }
}
//     c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
//         - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
//         - podałeś za dużą liczbę, liczba nie może być większa niż 30
//     d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
function randomNumber3(number) {
  if (number == null) {
    number = 5;
  } else if (number > 30 || number < 1) {
    console.log(
      "Podałeś za dużą liczbę, liczba nie może być większa niż 30 i mniejsza niż 1"
    );
  } else {
    return (parameterNumber = Math.random() * number);
  }
}

randomNumber3();

//     e) funkcja powinna zsumować pary klucz + wartość trzech pierwszych pozycji w obiekcie (użyj do tego Object.entries)
//     odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
//     wyznaczyć index
function sumKeyAndValue() {
  let sum = 0;
  let calculate = 0;
  let indexValue = 0;

  for (const [key, value] of Object.entries(people3.slice(0, 3))) {
    sum +=
      key.length +
      value.firstName.length +
      value.lastName.length +
      value.nickname.length;
  }
  calculate = Math.round(sum - parameterNumber);
  indexValue = Math.abs(calculate % colors.length);

  return indexValue;
}
sumKeyAndValue();
//     f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.

function getColorFromArray() {
  console.log("Color: ", colors[sumKeyAndValue()]);
}

getColorFromArray();
//     Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
//     (45 - 5) % 6 = 4
//     console.log(colors[4]) //pink
// ​
//     Hints
//     - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math,
//     Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią

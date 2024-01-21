for (let i = 0; i < 5; i++) {
  console.log(`Aktualna cyfra pętli to ${i}`);
}

console.log("while");
let num1 = 1;
while (num1 < 8) {
  console.log("While loop value: ", num1);
  num1 += 2;
}

console.log("do while");
let num2 = 1;
do {
  console.log(num2);
  num2++;
} while (("num2", num2 < 0));
//zostanie zwrócone 1

console.log("break");
for (let i = 0; i < 4; i++) {
  console.log(i);
  if (i == 2) {
    break;
  }
}
// pętla wykona się teraz tylko dla i=0 oraz dla i=2, takie też wartości zwróci.

function doWhile() {
  console.log("while");
  let i = 0;
  while (i < 4) {
    i++;
    console.log(i);
  }
}
doWhile();

function doWhileBreak() {
  console.log("doWhileBreak");
  let i = 0;
  do {
    i++;
    console.log(i);
    if (i == 2) {
      break;
    }
  } while (i < 4);
  // zwrócone wartości: 1 i 2
}
doWhileBreak();

function continueStatement() {
  console.log("pętla for");
  for (let i = 0; i < 12; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
  console.log("pętla while");
  let i = 0;
  while (i < 12) {
    i++;
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}
continueStatement();

const fastestCars = {
  first: "Fiat 126p",
  second: "Lamborghini Urus",
  third: "Ferrari Enzo",
};

for (let number in fastestCars) {
  console.log(`The ${number} fastest car is ${fastestCars[number]}`);
}

const ordinalNumber = ["first", "second", "third", "fourth"];

for (let item of ordinalNumber) {
  console.log(item);
}

// for...in jest używany do iteracji po właściwościach obiektów,

// for...of jest używany do iteracji po elementach tablicy,

// for...in nie zagwarantuje kolejności iteracji po właściwościach obiektu, natomiast for...of iteruje po elementach tablicy w kolejności jej elementów,

// for...in iteruje po wszystkich właściwościach obiektu, włącznie z tymi, które są dziedziczone z prototypu, a for...of nie iteruje po elementach dziedziczonych (dziedziczenie w JavaScript zostało wyjaśnione w odrębnym artykule),

// for...in nie jest odpowiedni do iteracji po tablicach, natomiast for...of jest przeznaczony do iteracji po tablicach.

const firstPrices = [22, 48, 39, 77, 129];

const salesPrices1 = firstPrices.map(function (price) {
  // każdy element tablicy dzielimy przez 2
  return price / 2;
});

// lub za pomocą arrow function:
const salesPrices2 = firstPrices.map((price) => price / 2);

console.log(salesPrices1); // [11, 24, 19.5, 38.5, 64.5]
console.log("By arrow function ", salesPrices2); // [11, 24, 19.5, 38.5, 64.5]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const divisibleByFour1 = numbers.filter(function (x) {
  return x % 4 === 0;
});

// lub za pomocą arrow function:
const divisibleByFour2 = numbers.filter((x) => x % 4 === 0);

console.log(divisibleByFour1); // [4, 8, 12]
console.log("By arrow function: :", divisibleByFour2); // [4, 8, 12]

const colorsRGB = "Red,Green,Blue";
const colors = colorsRGB.split(",");
console.log(colors); // ['Red', 'Green', 'Blue']

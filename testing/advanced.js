console.log("scoping");
if (true) {
  let x = "local scope";
  console.log(x); // lokalny scope
}
// console.log(typeof x); // undefined

console.log("closures");
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const add5 = outerFunction(5);
console.log(add5(3)); // 8

const osoba = {
  imie: "Jan",
  nazwisko: "Kowalski",
  wyswietlImie: () => {
    console.log(this.imie); //this w jej ciele jest związane z zewnętrznym kontekstem, w tym przypadku z obiektem window, a nie z obiektem osoba
  },
};

console.log(osoba.imie);
osoba.wyswietlImie(); // undefined

const age = 18;
const message1 =
  age >= 18 ? "Jesteś pełnoletni!" : "Nie jesteś jeszcze pełnoletni!";
console.log(message1); // "Jesteś pełnoletni!"

const isRaining = true;
const message2 = isRaining ? "Weź parasol!" : "Nie musisz brać parasola.";
console.log(message2); // "Weź parasol!"

const number = 5;
const message3 =
  number % 2 === 0 ? "Liczba jest parzysta" : "Liczba jest nieparzysta";
console.log(message3); // "Liczba jest nieparzysta"

let x = 0,
  y = 10;
for (let i = 0, j = y; i <= j; i++, j--) {
  console.log("i = " + i + ", j = " + j);
}

let a = 1,
  b = 2;
a = (b++, a + b);
console.log(a); // 4
console.log(b); // 3

let z = (5, 10, 15, 20);
console.log(z); // 20

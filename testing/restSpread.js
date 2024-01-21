const names = ["Bartek", "Karol"];
const numbers = [[18, 19, 20], 30, 45, 6, 120];
const numberArray = [21, 124, 42, 543, 32, 123];

const address = {
  street: "Kolejowa",
  postalCode: "89-123",
  city: "Warszawa",
};

const person = {
  name: "Kasia",
  age: 20,
  // address, //address: address - taka sama nazwa zmiennej i taki sam klucz
};

const sum = (a, b) => {
  return a + b;
};
console.log(sum(12, 12));

function restOperator(a, b, ...rest) {
  console.log("a ", a);
  console.log("b ", b);
  console.log("rest", rest);
}
restOperator(...numberArray);

function string(a, b, ...rest) {
  console.log(a + b + rest.join(""));
}

string("b ", names[0], " b ", ...names[1]);

function spreadAddress(person, address) {
  const newPerson = {
    ...person,
    ...address,
  };
  console.log(newPerson);
}

spreadAddress(person, address);

function spreadAddress2(a, b) {
  console.log("...numbers ", ...numbers);
  console.log("{...numbers} ", { ...numbers });
  console.log("numbers ", numbers);
}
spreadAddress2(person, person);

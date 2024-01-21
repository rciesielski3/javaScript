function triangleArea(base, height) {
  const area = (1 / 2) * base * height;
  return area;
}

const areaTriangle = triangleArea(10, 30);
console.log("areaTriangle -> output: " + areaTriangle);
console.log("areaTriangle -> output: ", areaTriangle);
console.log("triangleArea(30, 30) -> output: " + triangleArea(30, 30));
console.log("triangleArea(30, 30) -> output: ", triangleArea(20, 300));

const areaSquare = (base) => {
  const area = Math.pow(base, base);
  return area;
};

console.log("areaSquare => ", areaSquare(3));

const areaCircle = (radius) => 3.1415 * Math.pow(radius, 2);
console.log(areaCircle(2));

console.log("NAMES TABLE");
const names = ["Kasia", "Maciej", "Basia", "Zosia", "Bartek", "Darek", "Marta"];

function getGender(name) {
  const lastChar = name[name.length - 1];
  if (lastChar === "a") {
    return "female";
  }
  return "male";
}

const namesMapped = [];

for (i = 0; i < names.length; i++) {
  const name = names[i];
  const person = {
    name, // = name: name,
    gender: getGender(name),
  };
  namesMapped.push(person);
}

console.log(namesMapped);

function warmWelcome(person) {
  const join = person.gender === "female" ? "dołączyłaś" : "dołączyłeś";
  const welcome = `witaj ${person.name}, miło, ze ${join}`;
  console.log(welcome);
}

for (i = 1; i < namesMapped.length; i++) {
  warmWelcome(namesMapped[i]);
}

const fastestCars = {
  first: "Fiat 126p",
  second: "Lamborghini Urus",
  third: "Ferrari Enzo",
};
function cars() {
  for (let number in fastestCars) {
    console.log(`The ${number} fastest car is ${fastestCars[number]}`);
  }
}
// cars();

console.log("number");
let number = 15;

if (number > 10) {
  console.log("Liczba jest większa od 10.");
}

console.log("temperature");
let temperature = 8;

if (temperature > 10) {
  console.log("Temperatura jest wyższa niż 10 stopni :)");
} else {
  console.log("Zimno :(");
}

console.log("age");
let age1 = 20;

if (age1 < 18) {
  console.log("Osoba niepełnoletnia.");
} else if (age1 < 60) {
  console.log("Osoba dorosła.");
} else {
  console.log("Senior.");
}

console.log("weekday");
// let weekday = "środa";
let weekday = "wednesday";

switch (weekday) {
  case "monday":
    console.log("To pierwszy dzień roboczy.");
    break;
  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log("To środek tygodnia.");
  // break;
  case "friday":
    console.log("Już prawie weekend!");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("To nie jest ważny dzień tygodnia.");
}

let age = 11;
if (age >= 18) {
  console.log("Jesteś dorosły/dorosła.");
} else {
  console.log("Jesteś nieletni/nieletnia.");
}

let score = 90;

if (score < 50) {
  console.log("Nie zdałeś/zdałaś");
} else if (score > 50 && score < 70) {
  console.log("Przeciętny");
} else if (score > 71 && score <= 90) {
  console.log("Dobry");
} else {
  console.log("Doskonały");
}

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Wrong number of week");
}

let temperature1 = 20;
let weather = "słonecznie";

if (
  temperature1 >= 15 &&
  (weather == "śnienie" || weather == "wietrznie" || weather == "deszczowo")
) {
  console.log("Temperatura powyzej 15 stopni");
  console.log("Niesprzyjające warunki - zostań w domu!");
} else if (temperature1 < 15) {
  console.log("Jest tylko: " + temperature1 + " stopni.");
  console.log("Niesprzyjające warunki - zostań w domu!");
} else if (temperature1 > 15 && weather == "słonecznie") {
  console.log("Dobry dzień na spacer");
} else {
  console.log("Brak zdefiniowanego warunku dla pogody");
}

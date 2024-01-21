function indexof() {
  const cars = ["suv", "kombi", "sedan", "van"];
  const searchIndex = cars.indexOf("sedan");
  console.log("searchIndex", searchIndex); // 2

  const searchCabrio = cars.indexOf("cabrio");
  console.log("searchCabrio", searchCabrio); // -1
}
indexof();

function upper() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  const uppercaseText = text.toUpperCase();
  console.log("uppercaseText", uppercaseText); // LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
}
upper();

function lower() {
  const string = "Uczę się JavaScript!";
  const lowercaseText = string.toLowerCase();
  console.log(lowercaseText); // uczę się javascript!
}

lower();

function join() {
  const numbers = ["one", "two", "three", "four", "five", "six"];
  console.log("numbers", numbers);
  const numbersString = numbers.join(", ");

  console.log("numbersString join", numbersString); // 'one, two, three, four, five, six'
}
join();

function time() {
  const now = new Date();
  const timeNow = now.getTime();
  console.log("timeNow", timeNow); // np. 1676538447721
}
time();

function date() {
  const day = new Date();
  const dayOfMonth = day.getDate();
  console.log("dayOfMonth", dayOfMonth); // np. 16
}
date();

function day() {
  const sevenDays = new Date();
  const dayOfWeek = sevenDays.getDay();
  console.log("dayOfWeek", dayOfWeek);
}
day();

function month() {
  const month = new Date();
  const currentMonth = month.getMonth();
  console.log("currentMonth", currentMonth); // np. 1 (luty)
}

month();

function year() {
  const data = new Date("2021-10-23");
  const year = data.getFullYear();
  console.log("year", year); // 2021
}
year();

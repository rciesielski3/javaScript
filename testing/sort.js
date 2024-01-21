function typesOfBeer() {
  const typesOfBeer = ["Lager", "IPA", "APA", "Pils", "Stout"];
  typesOfBeer.sort();
  console.log(typesOfBeer); // ['APA', 'IPA', 'Lager', 'Pils', 'Stout']
}
typesOfBeer();

function numbers() {
  const numbers = [5, 1, 43, 11, 5, 9, -24, 6, 5, 36, -5, 13];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers); // [-24, -5, 1, 5, 5, 5, 6, 9, 11, 13, 36, 43]
}
numbers();

function find() {
  const numbers = [2, 4, 7, 5, 8, 10, 123, 457, 34, 90];

  const greaterThanTen1 = numbers.find(function (element) {
    return element > 10;
  });

  // lub za pomocą arrow function:
  const greaterThanTen2 = numbers.find((element) => element > 10);

  console.log(greaterThanTen1);
  console.log("By arrow function: ", greaterThanTen1);
}

find();

function reduce() {
  const myArray = [2, 3, 44, 55, 90, 111];

  const result = myArray.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}, array: ${array}`
      );
      return accumulator + currentValue;
    },
    0
  );

  console.log(result);
}

reduce();

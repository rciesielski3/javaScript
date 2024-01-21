console.log("Start!");

function hello() {
  console.log("Witaj, świecie!");
}

setTimeout(hello, 1000);

function hello2() {
  console.log("Witaj, świecie!");
}

const timeoutId = setTimeout(hello2, 1000);

// Anuluj wywołanie funkcji za pomocą clearTimeout
clearTimeout(timeoutId);

let counter = 0;

function incrementCounter() {
  console.log(`Licznik: ${counter}`);
  counter++;

  if (counter === 5) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(incrementCounter, 1000);

// zwracamy obietnicę
let fixedCar1 = new Promise(function (resolve, reject) {
  resolve("Promise resolved"); // zakładamy opcję, że obietnica została spełnionia
});
// kod do wykonania, kiedy obietnica posiada stan fulfilled

fixedCar1
  .then(function success1(result) {
    console.log(result);
  })

  .then(function success2() {
    console.log(
      "W ten sposób możesz wywołać kilka akcji dla spełnionej obietnicy."
    );
  });

// zwracamy obietnicę

let fixedCar2 = new Promise(function (resolve, reject) {
  reject("Promise rejected"); // zakładamy opcję, że obietnica nie została spełnionia
});

// kod do wykonania, kiedy obietnica posiada stan fulfilled

fixedCar2
  .then(function success1(result) {
    console.log(result);
  })

  // kod do wykonania, kiedy obietnica natrafiła na błąd
  .catch(function error(result) {
    console.log(result);
  });

const fetchData1 = fetch("<https://api.example.com/data1>");
const fetchData2 = fetch("<https://api.example.com/data2>");
const fetchData3 = fetch("<https://api.example.com/data3>");

Promise.all([fetchData1, fetchData2, fetchData3])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
  })
  .catch((error) => {
    console.error(error);
  });

const students = [
  { name: "Mateusz", age: 55 },
  { name: "Alicja", age: 22 },
  { name: "Krystian", age: 34 },
  { name: "Sebastian", age: 40 },
];

const someStudent = students.some((student) => student.age >= 50);
const giveApplause = function () {
  console.log("Bravooo!!!");
};

console.log("someStudent", someStudent);

if (someStudent) {
  giveApplause();
}

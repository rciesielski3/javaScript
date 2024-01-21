const students = [
  {
    name: "Bartek",
    age: 18,
  },
  {
    name: "Kamil",
    age: 22,
  },
  {
    name: "Darek",
    age: 21,
  },
];

students.forEach((value, index, array) => {
  console.log("value", value);
  console.log("index", index);
  console.log("array", array);
});

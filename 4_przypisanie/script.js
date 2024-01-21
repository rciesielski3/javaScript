const x = 10;
const y = x;

console.log("const x = 10; " + x);
console.log("const y = x; " + y);

// x += 5; // x = x + 5;
// x -= 5; // x = x - 5;
// x *= 5; // x = x * 5;
// x /= 5; // x = x / 5;

// console.log("x += 5 " + (x += 5));
// console.log("x -= 5 " + (x -= 5));
// console.log("x *= 5 " + (x *= 5));
// console.log("x /= 5 " + (x /= 5));

const z = 3;

z === 8; // false
z == 3; // true
z == "3"; // true

z === 3; // true
z === "3"; // false

z != 8; // true
z != 3; // false

z !== 3; // false
z !== "3"; // true
z !== 5; // true

z > 8; // false
z < 8; // true

z >= 8; // false
z >= 3; // true

z <= 8; // true
z <= 3; // true

console.log("z " + z);
console.log("z " + (z <= 3));

let x1 = 10;
let y1 = 5;

if (x1 > y1) {
  console.log("x jest większe niż y");
}

a = 9;
b = "9";

console.log("a == b " + (a == b));
console.log("a === b " + (a === b));

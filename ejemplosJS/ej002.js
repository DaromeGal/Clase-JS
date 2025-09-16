let name = "David";
let age = 19;
let isStudent = true;
let nameChild = null;
let surnameChild = undefined;
console.log(typeof nameChild);

let BestStudent = { name: "Ana", age: 20, isStudent: true };

let averageGrades = [9.5, 8.9, 7.5];

console.log(averageGrades);

function greet() {
  console.log("Hello, " + name);
}
greet();

console.log(typeof greet);

let puntero = greet;

let saludar = function () {
  console.log("Hello, " + name);
};
saludar();

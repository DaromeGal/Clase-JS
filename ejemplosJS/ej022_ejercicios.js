const fullName = (name, surname) => `${name} ${surname}`;
console.log(fullName('David', 'Romay'));

function calculator(a, b, operation) {
  if (operation === 'suma') return a + b;
  if (operation === 'resta') return a - b;
  return 0;
}

const calculator2 = (a, b, operation) => {
  if (operation === 'suma') return a + b;
  if (operation === 'resta') return a - b;
  return 0;
};

const operations = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  division: (a, b) => (b != 0 ? a / b : 'Error'),
};
const calculator3 = (a, b, operation) =>
  operations[operation](a, b) ? operations[operation](a, b) : 'Error';

console.log(calculator3(1, 0, 'division'));

let greets = () => 'Hola';

function printGreets() {
  console.log('Hola');
}
const printGreets2 = () => console.log('Hola!!!!');

printGreets2();

function personCreator(name, age) {
  return {
    name: name,
    age: age,
    gender: 'male',
    state: 'singer',
  };
}
const personCreator2 = (name, age) => ({
  name: name,
  age: age,
  gender: 'male',
  state: 'singer',
});

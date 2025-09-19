function sumar(num1, num2) {
  return num1 + num2;
}
function meLlamo1() {
  return 'David';
}

let meLLamo2 = function () {
  return 'David';
};

//lambdas
let meLLamo3 = () => {
  return 'David';
};

let meLLamo4 = () => 'David';

let sumar1 = (num1, num2) => num1 + num2;

const data = [3, 4, 5, 6, -5, 3];

// let soloPositivos = (num) => num >=0

console.log(data.filter((num) => num >= 0));

function operarNumeros(a, b, operacion) {
  operacion(a, b);
}
function operacionSumar(a, b) {
  return a + b;
}
function operacionMultiplicar(a, b) {
  return a * b;
}
console.log(operarNumeros(1, 2, operacionSumar));
console.log(operarNumeros(1, 2, operacionMultiplicar));

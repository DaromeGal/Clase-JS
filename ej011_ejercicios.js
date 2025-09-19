//crea una funcion que admita 2 objetos de tipo producto
//y devuelva la suma de los 2 precios con js

function sumaPrecios(producto1, producto2) {
  return producto1.precio + producto2.precio;
}
const producto1 = {
  nombre: 'libro',
  precio: 15,
};
const producto2 = {
  nombre: 'luz',
  precio: 20,
};
console.log(sumaPrecios(producto1, producto2));

function Alumno() {
  //atributos
  this.nombre = "Ana";
  this.edad = 22;
}
function Producto(n) {
  //atributos
  this.nombre = n;
  this.precio = 12.5;
  //metodos
  this.precioConIVA = function () {
    return this.precio * 1.21;
  };
}

let miArroz = new Producto("Arroz brillante");
console.log(miArroz.nombre);
console.log(miArroz.precio);
console.log(miArroz.precioConIVA());

let n = 22.1234;
console.log(n.toFixed(2));

Number.prototype.esPar=function(){
    return this%2===0
}
console.log(n.)
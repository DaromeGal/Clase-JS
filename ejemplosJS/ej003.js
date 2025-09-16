let miInquilino = {
  nombre: "Lucas",
  edad: 20,
  esEstudiante: true,
  direccion: {
    calle: "Calle Falsa 123",
    ciudad: "Springfield",
    pais: "USA",
  },
};
console.log(miInquilino.nombre);
console.log(miInquilino["nombre"]);
console.log(miInquilino.direccion.calle);

let c = {
  nombre: "Ana",
};
let d = c;

d.nombre = "Manolo";

console.log(c.nombre);
console.log(d.nombre);

let m = 5;
let n = m;
n = 10;
console.log(m); //5
console.log(n); //10

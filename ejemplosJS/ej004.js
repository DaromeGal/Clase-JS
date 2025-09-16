function miFuncion() {
  console.log("Hola Mundo");
}
miFuncion();

function imprimir(mensaje) {
  console.log(mensaje);
}

imprimir("Hola a todos");
imprimir(5);

function suma(a, b) {
  return a + b;
}

suma(5, 3);

let resultado = suma(5, 3);

console.log("El resultado de la suma es: " + resultado);

function saludar(usuario) {
  console.log("Hola, " + usuario.nombre);
}

let usuarioNuevo = {
  nombre: "David",
  edad: 19,
};

saludar(usuarioNuevo);

function shoot(accion) {
  accion();
}

function misilShoot() {
  console.log("shuuuuuuuut!");
}
function gunShoot() {
  console.log("pam! pam!");
}

shoot(misilShoot);
shoot(gunShoot);

function convertirAMayusculas(texto) {
  return texto.toUpperCase();
}
convertirAMayusculas("Hola Mundo");

function construirUsuario() {
  return {
    nombre: "Pedro",
    edad: 25,
    esEstudiante: false,
  };
}

function generarFuncion() {
  return function () {
    console.log("Hola Mundo");
  };
}
generarFuncion()();

function a() {
  console.log("Funcion A");
}
a.nombre = "Angel";

console.log(a.nombre);
a();

let persona = {
  nombre: "Laura",
  edad: 20,
  esEstudiante: false,
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

console.log(persona.nombre);
persona.saludar();

function modificar(v) {
  v = 30;
}
let v = 5;
console.log(v);
modificar(v);
console.log(v);

function modificar(alumno) {
  alumno.nombre = "Carlos";
}

let alumno = {
  nombre: "Sofia",
};

console.log(alumno.nombre);
modificar(alumno);
console.log(alumno.nombre);

//creacion de clases usando funciones
function Student(name) {
  this.name = name, 
  this.notaMedia = () => 9
}

const manolin = new Student('Manolin');

//creacion de clases usando clases
class Student2{
    constructor(name){

  this.name = name 
}
  notaMedia= () => 9
}

const pepin =new Student2('Pepin')
//crea una clase llamada Semaforo
//añade los atributos que consideres necesarios
//añade los metodos cambiar y mostrarEstado
//cambiar pasara al siguiente color
//mostrarEstado mostrara el color actual

function TraficLight() {
  this.color = 'rojo';

  nextState = function () {
    if (this.color == 'verde') {
      this.color = 'amarillo';
    } else if (this.color == 'amarillo') {
      this.color = 'rojo';
    } else {
      this.color = 'verde';
    }
  };
  show = function () {
    return console.log('El semaforo está en: ' + this.colores);
  };
}

let semaforo = new TraficLight();

semaforo.nextState();
semaforo.nextState();
semaforo.nextState();
semaforo.show();

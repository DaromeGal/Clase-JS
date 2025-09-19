function CuentaBancaria(titular, saldoInicial) {
  thisi.titular = titular;
  this.saldo = saldoInicial;
}
CuentaBancaria.prototype.ingresar = function (cantidad) {
  this.saldo += cantidad;
};
CuentaBancaria.prototype.extraer = function (cantidad) {
  if (saldo >= cantidad) this.saldo - cantidad;
};
CuentaBancaria.prototype.informar = function () {
  console.log(`El titular: ${this.titular} , saldo: ${this.saldo} `);
};
let miCuenta = new CuentaBancaria('Pepe', 10000);
miCuenta.informar();
miCuenta.ingresar(500);
miCuenta.informar();

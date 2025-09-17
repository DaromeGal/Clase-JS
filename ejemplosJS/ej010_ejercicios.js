const { read } = require('fs');
const readLine = require('readline');

const configuration = {
  input: process.stdin,
  output: process.stdout,
};

const rl = readLine.createInterface(configuration);

function trabajarConElNumero(num) {
  num = parseInt(num);
  num = console.log('el numero que has escrito es: ' + num);
  rl.close();
}
rl.question('dame un numero', trabajarConElNumero);

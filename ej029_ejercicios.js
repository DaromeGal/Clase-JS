//crea un objeto que
//Atributos: cantidad de azucar, tipo de cafe
//Metodos: Hacer Cafe
//nota: el cafe tarda 3 segundos en hacerse

let coffeMachine = {
    sugarAmount: 2,
    coffeType: 'solo', 
    doCoffe: (azucar,tipoCafe) => setTimeout(() => {console.log(`Cafe terminado con tipo ${tipoCafe} y azucar ${azucar}`)}, 3000)

}
coffeMachine.doCoffe(3,'con leche')
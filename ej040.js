//operador de Coalescencia nula (??)
//devuelve el valor del lado derecho si el valor del lado izq es null o undefinded
//util para establecer valores predeterminados

let name= 0
let info = name ?? "Desconocido"
console.log(info)

//operador logico OR (||)
//devuelve el primer valor truthy entre 2 o mas operandos
// si el primer operador es falsy, entonces evalua el segundo operador

let name2="David"
let info2= name || "Desconocido"
console.log(info2)

//Operador logico AND (&&)
//Devuelve el primer valor falsy entre 2 o mas operadores
//Evalua todas las condiciones solo si son truty, si no hay falsy devuelve el ultimo valor
let r= true && 0 && 1 && 'Hola'
console.log(r)

// Operador de encadenamiento opcional(?.)
 
let user={
    name:'Juan',
    age:22,
    address:{
        street: 'Brasil',
        number: 48
    }
}
let addressStreet= user.address?.street

let {address:{street}}=user 
console.log(street)
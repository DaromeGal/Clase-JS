function myFunction(){
    console.log(arguments)
}
myFunction(2,4,5,7,"perro")

//REST

function sumar(...n){
return n.reduce((a,b)=>a+b)
}
console.log(sumar(5,8,-1))
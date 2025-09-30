const students = new Map()

students.set('david',8)
students.set('orge',4)

for(let clave of students.keys()){
    console.log(clave)
}
for(let values of students.values){
    console.log(values)

}
for(let [key,values] of students.entries()){
    console.log(key,valor)
}
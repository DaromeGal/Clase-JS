let favouriteFilm = {
    title:'Alien',
    director: 'Scott',
    year: 1979,
}

//guarda en 2 variables el titulo y el año, y pintalos por pantalla

//let title = favouriteFilm.title
//let year = favouriteFilm.year

let {title,year,}= favouriteFilm
//console.log(a+' '+b)

let films = ['Alien', 'Matrix', 'Star Wars', 'Terminator', 'Depredador', 'Avatar']
let [a,b,...resto] = films

function favouriteDirectors(){
    //Buscando en la BD los favs
   return ['Scott', 'Cameron', 'Spielberg', 'Nolan','Tarantino']
}
//let director1 = favouriteDirectors()[0]
//let director2 = favouriteDirectors()[1]

let [director1,,director3]= favouriteDirectors()
console.log(director1+' '+director3)

function favouritActor(){
    return {
        name: 'dicaprio',
        age: 50,
        isSingle: true,
        money: 300000000,
    }
}

//let theName= favouritActor().name
//let money= favouritActor().money

let {name:theName,money}= favouritActor()
console.log(`Nombre: ${theName}, dinero: ${money}`)

const angelTeacher={
    id:40,
    name:'Angel',
    school: {
        name: 'Cebem',
        adress: 'Hispanidad 33'
    }
}
const {name, school:{name:nameSchool}} = angelTeacher
console.log(`Nombre: ${name}, nombre de la institucion: ${nameSchool}`)

let numbers = [4,5,6,7,8]
let newNumbers= [99,22,55]

let allNumbers= [...newNumbers,...numbers]
console.log(allNumbers)
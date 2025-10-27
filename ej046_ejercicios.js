function extraerHashtags(texto){
    const regex = /#[\wáÁéÉñÑ_]+/g
    const coincidencias= texto.match(regex)
    const lista = coincidencias ? coincidencias.map(tag => tag.slice(1)) : []

    const miSetSinRepes= new Set(lista)

    return [...miSetSinRepes]
}
const hastagh= extraerHashtags("Hoy estudiamos #regex en #Java_Script y #aprendemos mucho #regex!")
console.log(hastagh)
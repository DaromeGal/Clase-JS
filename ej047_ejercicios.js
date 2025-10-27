function extraerFechas(texto){
    const regex= /\d{1,2}[\/-]\d{1,2}[\/-]\d{1,2}[\/-]\d{4}|\d{4}[\/-]\d{1,2}[\/-]\d{1,2}/g
    const fechas = texto.match(regex)
    return fechas
}
const fechas=extraerFechas(
    ` Eventos:

Examen: 12/11/2024
Vacaciones: 2025-07-14
Reunión: 01-02-2023 `
)
console.log(fechas)
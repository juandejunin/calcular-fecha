const fechaFinal = new Date ('2023-08-23')
const resultado = document.getElementById('resultado')

// Para calcular cuantos miligundos tendre en los diferentes tipos de valores que voy a usar.

//Año
const ms_year = 1000 * 60 * 60 * 24 * 365;
//Mes
const ms_mes = 1000 * 60 * 60 * 24 * 30;
//dia
const ms_dia = 1000 * 60 * 60 * 24
//hora
const ms_hora = 1000 * 60 * 60
//minuto
const ms_minuto= 1000 * 60 
//segundo
const ms_segundo = 1000

//para que la funcion sea similar a un cronometro, que se refresque, hay que introducirla dentro de un setInterval
setInterval(()=>{
    //calcular la diferencia entre el dia de hoy y la fecha indicada
const hoy = new Date();
let  resto;
const diffMilisengundos = Math.abs(fechaFinal -hoy) //esto me arroja la diferencia entre las dos fechas en milisegundos

const years = Math.floor(diffMilisengundos / ms_year)

resto = diffMilisengundos % ms_year
const meses = Math.floor(resto / ms_mes)

resto = diffMilisengundos % ms_mes
const dias = Math.floor(resto / ms_dia)

resto = diffMilisengundos % ms_dia
const horas = Math.floor(resto / ms_hora)

resto = diffMilisengundos % ms_hora
const minutos = Math.floor(resto / ms_minuto)

resto = diffMilisengundos % ms_minuto
const segundos = Math.floor(resto / ms_segundo)

resultado.innerText = `${years}:${meses}:${dias}:${horas}:${minutos}:${segundos}`
},1000)






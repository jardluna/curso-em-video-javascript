var agora = new Date()
var dia = agora.getDate() //Dia
var hora = agora.getHours() //Hora
var min = agora.getMinutes() //Minutos
var diaSem = agora.getDay() //Dia da semana
//diaSem = 7
/*
    0- Domingo
    1- Segunda-feira
    2- Terça-feira
    3- Quarta-feira
    4- Quinta-feira
    5- Sexta-feira
    6- Sábado
*/
switch(diaSem) {
    case 0:
        console.log(`Hoje é dia ${dia}, Domingo, e são exatamente ${hora}:${min}h`)
        break
    case 1:
        console.log(`Hoje é dia ${dia}, Segunda-feira, e são exatamente ${hora}:${min}h`)
        break
    case 2:
        console.log(`Hoje é dia ${dia}, Terça-feira, e são exatamente ${hora}:${min}h`)
        break
    case 3:
        console.log(`Hoje é dia ${dia}, Quarta-feira, e são exatamente ${hora}:${min}h`)
        break
    case 4:
        console.log(`Hoje é dia ${dia}, Quinta-feira, e são exatamente ${hora}:${min}h`)
        break
    case 5:
        console.log(`Hoje é dia ${dia}, Sexta-feira, e são exatamente ${hora}:${min}h`)
        break
    case 6:
        console.log(`Hoje é dia ${dia}, Sábado, e são exatamente ${hora}:${min}h`)
        break
    default:
        console.log('[ERROR]')
        break
}
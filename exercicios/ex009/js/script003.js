var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
console.log(`Agora são exatamente ${hora}:${min}:${seg}hrs.`)
if (hora >= 1 && hora <= 5) {
    console.log('Boa madrugada')
} else if (hora >= 6 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 24) {
    console.log('Boa noite')
} else {
    console.log('Essa hora não existe')
}
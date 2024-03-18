function converter() {
let disM = window.prompt(`Digite uma distância em metros(m): `)
let res = window.document.querySelector('div#res')

let disKm = Number(disM / 1000) //Quilômetro (Km)
let disHm = Number(disM / 100 ) //Hectômetro (Hm)
let disDam = Number(disM / 10)  //Decâmetro (Dam)
let disDm =                     //Decímetro (Dm)
let disCm =                     //Centimetro (Cm)
let disMm =                     //Milímetro (Mm)

res.style.fontWeight = 'bold'
res.style.fontSize = '1.5em'
res.innerHTML = `<p>A distancia de ${disM} metros, corresponde a:</p>`
res.innerHTML += `<p>${disKm} quilômetros (Km)</p>`
}
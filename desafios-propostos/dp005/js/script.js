function converter() {
let disM = window.prompt(`Digite uma distância em metros(m): `)
let res = window.document.querySelector('div#res')

let disKm = Number(disM / 1000) //Quilômetro (Km)
let disHm = Number(disM / 100 ) //Hectômetro (Hm)
let disDam = Number(disM / 10)  //Decâmetro (Dam)
let disDm = Number(disM * 10)   //Decímetro (Dm)
let disCm = Number(disM * 100)  //Centimetro (Cm)
let disMm = Number(disM * 1000) //Milímetro (Mm)

res.style.lineHeight = '2em'
res.innerHTML = `<p style="font-weight: bold; font-size: 1.5em; padding-bottom: 20px;">A distancia de ${disM} metros, corresponde a:</p>`
res.innerHTML += `<p>${disKm} quilômetros (km)</p>`
res.innerHTML += `<p>${disHm} hectômetros (hm)</p>`
res.innerHTML += `<p>${disDam} decâmetros (dam)</p>`
res.innerHTML += `<p>${disDm} decímetros (dm)</p>`
res.innerHTML += `<p>${disCm} centímetros (cm)</p>`
res.innerHTML += `<p>${disMm} milímetros (mm)</p>`
}
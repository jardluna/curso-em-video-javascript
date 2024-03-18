function converter() {
    let tempC = Number(window.prompt('Digite uma temperatura em ºC (Celsius)'))
    let res = window.document.querySelector('div#res')

    let tempK = tempC + 273.15
    let tempF = (tempC * 1.8) + 32

    res.innerHTML = `<p style='font-size: 1.5em; font-weight: bold; padding-bottom: 20px;'>A temperatura de ${tempC}ºC corresponde a:</p>`
    res.style.fontSize = '1em'
    res.style.lineHeight = '2em'
    res.innerHTML += `<p>${tempK}K (Kelvin)</p>`
    res.innerHTML += `<p>${tempF}ºF (fahrenheit)</p>`
}
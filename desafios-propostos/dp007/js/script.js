function converter() {
//Variável para criar a formatar o dia, o mês e o ano
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let diaF = dia < 10 ? `0${dia}` : `${dia}`
    let mesF = mes < 10 ? `0${mes}` : `${mes}`

//Variável para guardar o valor da cotação do dolar -> real
    let dol = window.prompt(`Antes de mais nada. Quanto está a cotação do dólar hoje (${diaF}/${mesF}/${ano})`)
//Variável para guardar o valor em real na carteira
    let rea = window.prompt(`Quantos R$ você tem na carteira?`)

//Variável para mostrar o valor já convertido
    let res = window.document.querySelector('div#res')
    let con = parseFloat(rea / dol).toFixed(2)
    res.innerHTML = `<p>Na cotação atual, R$${rea}(real) está valendo US$${con}(dólar)</p>`
}
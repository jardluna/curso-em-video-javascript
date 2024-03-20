function verificar() {
    let prcIni = Number(window.prompt('Qual era o preço anterior do produto?'))
    let prcFin = Number(window.prompt('Qual é o preço atual do produto?'))
    let res = window.document.querySelector('div#res')

    res.innerHTML = '<p style="font-size: 1.4em;font-weight: bold; padding-bottom: 10px;">Analisando os valores informados</p>'
    res.innerHTML += `<p>O produto custava R$${prcIni} e agora custa R$${prcFin}</p>`
    res.style.lineHeight = '1.5em'

    if (prcIni < prcFin) {
//Aumento no preço
        let difAume = prcFin - prcIni
        let porce =  (prcFin / prcIni - 1) * 100
        
        res.innerHTML += `<p style="background-color: rgba(255, 0, 0, 0.5); border-radius: 30px; margin: -5px; padding: 0px 5px;">Hoje o produto está mais caro</p>`
        res.innerHTML += `<p>O preço subiu R$${difAume} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${porce.toFixed(2)}% pra cima</p>`
    } else if (prcIni > prcFin) {
//Diminuição no preço
        let difDimu = prcIni - prcFin
        let porce =  (prcIni / prcFin - 1) * 100

        res.innerHTML += `<p style="background-color: rgba(0, 128, 0, 0.5); border-radius: 30px; margin: -5px; padding: 0px 5px;">Hoje o produto está mais barato</p>`
        res.innerHTML += `<p>O preço caiu R$${difDimu} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${porce.toFixed(2)}% pra baixo</p>`
    }
}
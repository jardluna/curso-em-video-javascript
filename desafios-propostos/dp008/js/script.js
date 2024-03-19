function desconto() {
//Variável para guardar o produto, o preço e o desconto
    let produ = window.prompt('Qual o produto que você está comprando?')
    let preco = window.prompt(`Qual o preço do(a) ${produ}?`)
    let desco = window.prompt('Quantos % você ganhou de desconto? (Limitado a 80% de desconto)')

//Condicional para confimar o desconto
    if (desco > 80) {
        window.alert('Verifique o desconto e tente novamente')
        res.innerHTML = 'Clique no botão acima para iniciar'
    } else {
        let res = window.document.querySelector('div#res')
        let descApl = (preco / 100) * desco
        let precoFin = parseFloat(preco - descApl).toFixed(2)
        let valorDes = parseFloat(preco - precoFin).toFixed(2)

        res.innerHTML = `<p style='font-weight: bold; padding-bottom: 10px;'>Calculando desconto de ${desco}% para ${produ.toUpperCase()}:</p>`
        res.style.lineHeight = '2em'
        res.innerHTML += `<p>O preço original era R$${preco}.</p>`
        res.innerHTML += `<p>Você acaba de ganhar R$${valorDes} de desconto (-${desco}%).</p>`
        res.innerHTML += `<p>No fim, você vai pagar R$${precoFin} no(a) ${produ}</p>`
    }
}
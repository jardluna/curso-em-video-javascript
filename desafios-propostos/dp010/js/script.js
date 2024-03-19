function calcular() {
    let a = window.prompt('Qual o valor de [a]?')
    let b = window.prompt('Qual o valor de [b]?')
    let c = window.prompt('Qual o valor de [c]?')
    let res = window.document.querySelector('div#res')
    let delta = b * b - 4 * a * c

    if(!a || !b || !c) {
        window.alert('Insira os valores de [a], [b] e [c]')
        res.style.fontWeight = 'bold'
        res.innerHTML = 'Insira todos os valores e tente novamente'
    } else if (a == 0) {
        window.alert(`O valor de [a], deve ser diferente de 0`)
        res.style.fontWeight = 'bold'
        res.innerHTML = 'Altere o valor de [a] e tente novamente'
    } else if (delta < 0) {
        window.alert('Sem raízes reais')
        res.style.fontWeight = 'bold'
        res.innerHTML = 'Sem raízes reais, altre os valores e tente novamente'
    } else {
        res.style.lineHeight = '2em'
        res.style.fontSize = '1.1em'
        res.innerHTML = '<p style="font-weight: bold; font-size: 1.4em; padding-bottom: 10px;">Resolvendo Bhaskara</p>'
        res.innerHTML += `A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong> <br>`
        res.innerHTML += `O cálculo realizado será <strong>&#916 = ${b}² - 4 . ${a} . ${c}</strong> <br>`
        res.innerHTML += `O valor calculado foi <strong style="background-color: yellow;">&#916 = ${delta}</strong> <br>`
    }
}
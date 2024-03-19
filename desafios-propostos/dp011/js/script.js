function verificar() {
    let ano = window.prompt('Qual o ano será verificado?')
    let res = window.document.querySelector('div#res')

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        res.innerHTML = `<p style="font-weight: bold; padding-bottom: 10px; font-size: 1.4em;">Analisando o ano de ${ano}...</p>`
        res.innerHTML += `O ano de ${ano} <strong style="background-color: rgba(0, 128, 0, 0.5); padding: 6px; border-radius: 30px;">É BISSEXTO &#9989;</strong>`
    } else {
        res.innerHTML = `<p style="font-weight: bold; padding-bottom: 10px; font-size: 1.4em;">Analisando o ano de ${ano}...</p>`
        res.innerHTML += `O ano de ${ano} <strong style="background-color: rgba(255, 0, 0, 0.5); padding: 6px; border-radius: 30px;">NÃO É BISSEXTO &#10060;</strong>`
    }
}
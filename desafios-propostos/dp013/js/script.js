function notas() {
    let nome = window.prompt(`Qual o nome do aluno?`)
    let nota1 = parseFloat(window.prompt(`Primeira nota de ${nome.toUpperCase()}:`))
    let nota2 = parseFloat(window.prompt(`Segunda nota de ${nome.toUpperCase()}:`))
    let res = window.document.querySelector('div#res')

    let media = ((nota1 + nota2) / 2).toFixed(2)

    res.innerHTML = `<p style="font-size: 1.4em; padding-bottom: 10x;">Analisando a situação de ${nome.toUpperCase()}</p>`
    res.style.lineHeight = '2em'
    if (media <= 3) {
//REPROVADO
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <span style="font-weight: bold;">média é ${media}</span></p>`
        res.innerHTML += `<p>Com média abaixo de 3.0, o aluno está <span style="background-color: rgba(255, 0, 0, 0.5); border-radius: 30px; padding: 5px;">REPROVADO</span></p>`
    } else if (media >= 3  && media <= 6) {
//RECUPERAÇÃO
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <span style="font-weight: bold;">média é ${media}</span></p>`
        res.innerHTML += `<p>Com média entre 4.0 e 6.0, o aluno está de <span style="background-color: rgba(255, 255, 0, 0.5); border-radius: 30px; padding: 5px;">RECUPERAÇÃO</span></p>`
    } else if (media >= 6) {
//APROVADO
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <span style="font-weight: bold;">média é ${media}</span></p>`
        res.innerHTML += `<p>Com média acima de 6.0, o aluno está <span style="background-color: rgba(0, 128, 0, 0.5); border-radius: 30px; padding: 5px;">APROVADO</span></p>`
    }
}
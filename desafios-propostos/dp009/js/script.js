function reajustar() {
    let nom = window.prompt('Qual o nome do funcionário?')
    let sal = Number(window.prompt(`Qual o salário de ${nom[0].toUpperCase() + nom.substring(1)}`))
    let rea = Number(window.prompt(`O salário de ${nom[0].toUpperCase() + nom.substring(1)} vai ser reajustado em qual porcentagem?`))
    let res = window.document.querySelector('div#res')
    let valRea = Number(((sal / 100) * rea).toFixed(2))
    let novSal = Number((sal + valRea).toFixed(2))

    res.style.lineHeight = '2em'
    res.innerHTML = `<p style='font-weight: bold; font-size: 1.2em; padding-bottom: 10px;'>O salario de ${nom.toUpperCase()} foi reajustado!</p>`
    res.innerHTML += `<p>O seu salário era de R$${sal}.</p>`
    res.innerHTML += `<p>Com um aumento de ${rea}%, o salário vai aumentar R$${valRea} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir de agora, ${nom[0].toUpperCase() + nom.substring(1)} vai passar a ganhar R$${novSal}</p>`
}
/*
let nom = Nome
let sal = Salário
let rea = Reajuste
let valRea = Valor Reajustado
let novSal = Novo Salário
*/
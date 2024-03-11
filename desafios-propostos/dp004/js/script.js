function calcular() {
    var prd = window.prompt(`Que produto você está comprando?`)
    var valI = Number(window.prompt(`Quanto custa o ${prd} que você está comprando?`))
    var valP = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${prd}?`))
    var trc = valP - valI

    window.alert(`Você comprou ${prd} que custou R$${valI}.\nPagou R$${valP} em dinheiro, e vai receber R$${trc} de troco.\nVolte Sempre!`)

}
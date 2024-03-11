function verificar() {
    var num = Number(window.prompt(`Digite um número inteiro qualquer`))
    var ant = num - 1
    var suc = num + 1
    window.alert(`Antes do ${num}, temos o número ${ant}. 
    Depois do ${num}, temos o número ${suc}`)
}
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        //Método para dizer quantos números tem o Array
        let tot = valores.length

        //Método para dizer qual o maior e menor número
        let maior = Math.max.apply(null, valores)
        let menor = Math.min.apply(null, valores)

        /*(Método que apresenta alguns bugs)
        valores.sort()
        let menor = valores[0]
        let maior = valores[valores.length - 1]*/
        
        /*(Método utilizado no curso, pórem, pouco funcional)
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }*/

        //Método para somar todos os números do Array
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }

        //Método para calcular a média da soma do Array
        let media = 0
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>E a média dos valores é: ${media}</p>`
        res.style.lineHeight = '2em'
        res.style.fontWeight = 'bold'
    }
}
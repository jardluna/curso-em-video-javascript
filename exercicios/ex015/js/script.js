let num = [7, 3, 9, 1]
num.push(5)
console.log('------------------------------')
console.log(num)
let pos = num.indexOf(4) //Digite aqui o valor
if (pos == -1) {
    console.log(pos)
    console.log('Valor não encontrado')
} else {
    for (let val in num) {
        console.log(`O valor ${num[val]} está na posição ${val}`)
    }
    console.log(`E agora os valores estão em ordem crescente: ${num.sort()}`)
}
console.log('------------------------------')
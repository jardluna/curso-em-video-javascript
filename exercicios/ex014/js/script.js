let num = [7, 5, 9, 1]
num.push(3)

console.log(num)
console.log(`Vetor em ordem crescente: ${num.sort()}`)
console.log(`O vetor possui ${num.length} posições`)
let val = num.indexOf(7)
if (val == -1) {
    console.log(`Esse valor não foi encontrado...`)
} else {
    console.log(`O vetor está na posição ${val}`)
}
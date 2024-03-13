let num = [3, 9, 5] //Array(vetor)
num[3] = 7  //Adicionando um número ao array (7), e escolhendo sua posição ([3])
num.push(1) //Adicionando um número ao array (1), e forçando o JavaScrit a escolher a proxima posição

console.log(`Array ${num}`)
console.log(`Array em ordem crescente: ${num.sort()}`) //num.sort() coloca o array em ordem crescente
console.log(`Quantidade de caracteres do array(vetor): ${num.length}`) //num.length diz o tamanho do array
console.log(num[5])
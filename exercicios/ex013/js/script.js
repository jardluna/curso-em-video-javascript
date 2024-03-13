let val = [7, 5, 9, 1]
val.push(3) //.push() - Adicionar um novo valor (3) ao Array, sempre na última posição
val.sort() //.sort() - Coloca os valores do Array em ordem crescente
console.log(val.indexOf(7)) //.indexOF() - Mostra a posição do valor (7) escolhido dentro do Array
console.log(val.indexOf(2)) //.indexOf() - E no caso do valor (2) escolhido não existir, retorna posição -1
console.log(val) 

/*for (let pos = 0; pos < val.length; pos++) { //Síntaxe de For padrão
    console.log(`A posição ${pos} no Array, tem os valor ${val[pos]}`)
}*/

for (let pos in val) { //Síntaxe de For dedicada a Objects (por exemplo: Array). Mais recomendada
    console.log(`A posição ${pos} no Array, tem os valor ${val[pos]}`)
}
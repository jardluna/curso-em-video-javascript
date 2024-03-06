var idade = 70
if (idade < 16) {
    console.log(`Você tem ${idade} anos, e não pode votar`)
} else if (idade < 18 || idade >= 70) {
        console.log(`Você tem ${idade} anos, e o seu voto é opcional`)
    } else {
        console.log(`Você tem ${idade} anos, e o seu voto é obrigatório`)
    }
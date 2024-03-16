let amigo = {nome:'José', sexo:'Masculino', peso:85.4, 
engordar(p=0){ //engordar é uma function
    console.log(`E ele engordou. Agora está pesando ${this.peso += p}`)
    //this.peso += p - Também pode ser aplicado direto no console.log com template string
}}

console.log(`${amigo.nome}, um adulto do sexo ${amigo.sexo}, pesa ${amigo.peso}`)
amigo.engordar(2)

function verificar() {
    //window.alert('TESTE')
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoForm = window.document.getElementById('anoInp')
    var resp = window.document.getElementById('respDiv')

    if (anoForm.value.length < 4 || Number(anoForm.value) > anoAtual) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var sexo = window.document.getElementsByName('sexoInp')
        var idade = anoAtual - Number(anoForm.value)
        var genero = ''
        var img = window.document.createElement('img')
        //img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 4) {
                //Bebê HOMEM
                img.setAttribute('scr', 'bebe-H.png')
            } else if (idade >= 5 && idade <= 11) {
                //Criança HOMEM
                
            } else if (idade >= 12 && idade <= 17) {
                //Adolescente HOMEM
                
            } else if (idade >= 18 && idade <= 64) {
                //Adulto HOMEM
                
            } else {
                //Idoso HOMEM
                
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 4) {
                //Bebê MULHER

            } else if (idade >= 5 && idade <= 11) {
                //Criança MULHER

            } else if (idade >= 12 && idade <= 17) {
                //Adolescente MULHER

            } else if (idade >= 18 && idade <= 64) {
                //Adulto MULHER

            } else {
                //Idoso MULHER

            }
        }
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img)
    }
}
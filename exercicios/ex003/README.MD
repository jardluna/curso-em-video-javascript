1- window.prompt('') recebe por padrão um String
2- Number + Number: + com efeito de Adição
3- String + String: + com efeito de Concatenação
4- Number pode ser declarado como:
    4.1- Int (número inteiro)
    2.2- Float (número real)
5- Number.parseInt(s) converte o dado inserido de String em Number, e o transforma em Int
    5.1- Exemplo: var n1 = Number.parseInt(window.prompt('Digite um número:'))
    5.2-
6- Number.parseFloat(s) converte o dado inserido de String em Number, e o transforma em Float
    6.1- Exemplo: var n1 =  Number.parseFloat(window.prompt'Digite um número:'))
    6.2-
7- Number(s) converte o dado inserido de String em Number, e o JS decide se irá transformar em Int ou Float
    7.1- Exemplo: var n1 = Number(window.prompt('Digite um número:'))
    7.2-
8- n.toString() ou String(n) converte o dado Number em uma String
    8.1- Exemplo:   var s = n1 + n2
                    window.alert('A soma dos valores é ' + s.toString())
    8.2- Exemplo:   var s = n1 + n2
                    window.alert('A soma dos valores é ' + String(s))
9- s.length declara quantos caracteres a String tem
10- s.toUpperCase() converte todos os caracteres me maiúsculas
11- s.toLowerCase() converte todos os caracteres em minúsculas
12- n.toFixer(n) limita a quantidade de casas decimais de um Number
    12.1- Exemplo:  var n1 = 1545.5
                    n1.toFixd(2)
                    = 1545.50
13- n.toFixed(n).replace('', '') limita a quantidade de casas decimais de um Number e troca um caractere por outro
    13.1- Exemplo:  var n1 = 1545.5
                    n1.toFixd(4).replace('.', ',')
                    = 1545,5000
14- n1.toLocaleString('pt-br', {style: 'currency', currency: ''}) converte o valor Number no sálario escolhido
    14.1- Exemplo 1:    n1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                        = R$ 1.545,50 (real)
    14.2- Exemplo 2:    n1.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})
                        = US$ 1.545,50 (dolar)
    14.3- Exemplo 3:    n1.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})
                        = ¢ 1.545,50 (euro)
15- document.writeln() mostra no navegador uma mensagem
    15.1- Exemplo:  var nome = window.prompt('Qual é seu nome?')
                    document.writeln(`Olá ${nome}`)

Regra de Comentários
1- Comentário em HTML: <!---->
2- Comentário em CSS: /**/
3- Comentário em JS: /**/ ou //
//
Operadores Aritméticos:
1- + (adição)
    1.1- Exemplo: 5 + 2 = 7
2- - (subtração)
    2.1- Exemplo: 5 - 2 = 3
3- * (multiplicação)
    3.1- Exemplo: 5 * 2 = 10
4- / (divisão intira)
    4.1- Exemplo: 5 / 2 = 2.5
5- % (resto da divisão)
    5.1- Exemplo: 5 % 2 = 1
6- ** (potenciação)
    6.1- Exemplo: 5 ** 2 = 25
OBSERVAÇÃO: Cuidado com a ordem de precedencia. As operações possuem uma ordem de prioridade na hora de serem calculadas. Sendo assim, primeiro calculamos:
    1- () (parenteses)
    2- ** (potenciação)
    3- * (multiplicação), / (divisão inteira) e % (resto da divisão)
    4- + (adição) e - (subtração)
//
//
Operadores Relacionais:
1- > (maior que)
    1.1- Exemplo: 5 > 2 = true
    1.2- Exemplo: 2 > 5 = false
2- < (menor que)
    2.1- Exemplo: 6 < 9 = true
    2.2- Exemplo: 9 < 6 = false
3- >= (maior ou igual)
    3.1- Exemplo: 4 >= 4 = true
    3.2- Exemplo: 4 >= 8 = false
    3.3- Exemplo: 8 >= 4 = true
4- <= (menor ou igual)
    4.1- Exemplo: 7 <= 7 = true
    4.2- Exemplo: 7 <= 3 = false
    4.3- Exemplo: 3 <= 7 = true
5- != (diferente)
    5.1- Exemplo: 6 != 4 = true
    5.2- Exemplo: 6 != 6 false
6- == (igual)
    6.1- Exemplo: 5 == 5 = true
    6.2- Exemplo: 5 == 9 = false
    6.2- Exemplo: 9 == '9' = false
7- === (identidade - avalia alem do valor, o typeof)
    7.1- Exemplo: 8 === 8 = true
    7.2- Exemplo: 8 === '8' = false
    7.3- Exemplo: 2 === 8 = false
    7.3- Exemplo: '2' === '2' = true
8- !== (identidade diferente)
    8.1- Exemplo: 3 !== 7 = true
    8.2- Exemplo: 3 !== '3' = true
    8.3- Exemplo: 7 !== 7 = false
    8.4- Exemplo: '7' !== '7' = false
OBSERVAÇÃO: Operações relacionais são declarações do tipo Boolean. Sendo assim, seus valores são True e False.
//
//
Operadores Lógicos:
1- ! (negação - também se lê NAO)
    1.1- Exemplo: !true = false
    1.2- Exemplo: !false = true
2- && (conjunção - também se lê E)
    2.1- Exemplo: true && true = true
    2.2- Exemplo: true && false = false
    2.3- Exemplo: false && true = false
    2.4- Exemplo: false && false - false
3- || (disjunção -  também se lê OU)
    3.1- Exemplo: true || true = true
    3.2- Exemplo: true || false = true
    3.2- Exemplo: false || true = true
    3.4- Exemplo: false || false = false
OBSERVAÇÃO: Caso haja mais de um operador lógico na mesma expressão, a ordem de execução será sempre: 
    1- negação
    2- conjunção
    3- disjunção
//
//
Operador Ternário:
1- ?: (validador - válida se é uma opção ou outra)
    1.1- Exemplo:   var media = 85
                    media >= 70 ? 'Aprovado'(true) : 'Reprovado'(false)
                    = 'Aprovado'(true)
    1.2- Exemplo:   var valor = 750
                    valor <= 400 ? 'Pode comprar'(true) : 'Não pode comprar'(false)
                    = 'Não pode comprar'(false)
                    
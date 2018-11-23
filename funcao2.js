// Armazenando uma funcao em uma variavel
const imprimiSoma = function(a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

// Retorno implicito
const subtrcao = (a, b) => a - b

console.log(subtrcao(10, 2))

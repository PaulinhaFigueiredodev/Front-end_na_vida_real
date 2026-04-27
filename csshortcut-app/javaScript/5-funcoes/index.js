/**
 * PARTE 6: Funcoes 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
 * */ 

function escreve(nome) {
    console.log('Seu nome é ' + nome)
}

escreve('Cyber')

var nome = function escreve(nome) {
    console.log(nome)
}

nome('Cyber')
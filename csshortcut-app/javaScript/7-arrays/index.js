/**
 * PARTE 8: Trabalhando com arrays
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/**
var testandoArrays = ['Pedro', 'Thiago', 'Joao', 'Barquinho', [1,2,3,{nome: 'Paulinha'}]];

var testandoArrays2 = testandoArrays[4][3].nome

testandoArrays2 = 'nunu'

console.log(testandoArrays2)
*/
 
var gatos = ['yoda', 'lea', 'nunu', 'luke'];

gatos.forEach(function (item, index, array) {
    console.log(item,index, array)
});



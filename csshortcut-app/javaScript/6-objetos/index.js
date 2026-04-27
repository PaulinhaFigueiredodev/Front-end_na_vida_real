/**
 * PARTE 7: Trabalhando com objetos
 * https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics
 */
var pokemon = {
    atk: 200,
    def: '300',
    move: function(x) {
        return x + 'choque do trovao '
    }
}

console.log(
    pokemon.move('pikachu ')
)

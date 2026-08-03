// Function expression: é uma função anônima atribuída a uma variável.
// ela pode ser chamada apenas depois de sua declaração.

const nome = function(x) {
  return x;
}

console.log(nome('Paula'));

// Arrow function: é uma forma mais curta de escrever uma função anônima.
// ela pode ser chamada apenas depois de sua declaração.
const idade = () => {
  console.log('Idade: 37 anos');
}

idade();

// Arrow function com parâmetro: é uma forma mais curta de escrever uma função anônima com parâmetro.
// ela pode ser chamada apenas depois de sua declaração.
const sobrenome = x => {
  console.log(x);
}

sobrenome('Sobrenome: Figueiredo');

// Arrow function com dois parâmetros: é uma forma mais curta de escrever uma função anônima com dois parâmetros.
// ela pode ser chamada apenas depois de sua declaração.
const doisParametros = (x, y) => {
  console.log(x + y);
}

doisParametros('Paula' ,'Figueiredo');

// Arrow function com apenas um parâmetro: é uma forma mais curta de escrever uma função anônima com apenas um parâmetro.
// ela pode ser chamada apenas depois de sua declaração.
const curiosidade = x => x;

console.log(curiosidade('Curiosidade: Arrow function com apenas um parâmetro não precisa de parênteses nem chaves.'));

// Arrow function com apenas um parametro nao precisa de parênteses, mas pode ter chaves.
const outraCuriosidade = (x) => x ;

console.log(outraCuriosidade('Curiosidade: Arrow function com apenas um parâmetro não precisa de parênteses, mas pode ter chaves.'));

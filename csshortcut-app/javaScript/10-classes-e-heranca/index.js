// Exemplo de classe em JavaScript
// A classe Pokemon possui um construtor que recebe o nome do Pokémon

class Pokemon {
    constructor(nome) {
        this.nome = nome;
    }

    get superAtk() {
        return this.atk();
    }

    atk() {
        return `${this.nome} está atacando!`;
    }

}

//const pikachu = new Pokemon("Pikachu");

//console.log(pikachu.superAtk); // Output: Pikachu está atacando!

class Pikachu extends Pokemon {
    constructor(nome) {
        super(nome);
    }

    atk() {
        return `${this.nome} está atacando com um ataque elétrico!`;
    }
}

const pikachu = new Pikachu("Pikachu");

console.log(pikachu.atk()); // Output: Pikachu está atacando com um ataque elétrico!
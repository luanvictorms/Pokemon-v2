class Player {
    constructor(nome) {
      this.nome = nome
      this.pokemon = []
      this.vez = 0
      this.dado = 0
    }

    rolarDado() {
        let dado = Math.floor(Math.random() * 6 + 1);
        console.log(`O jogador ${this.nome} rolou ${dado} no dado`);
        this.dado = dado;
        return this.dado;
    }

    sortearPokemon(pokemonSorteado) {
        this.pokemon = pokemonSorteado
        console.log(`O jogador ${this.nome} sorteou ${this.pokemon}`);
    }

    setVez(valor) {
        this.vez = valor
    }

    getPokemon(){
        return this.pokemon;
    }

    getVez(){
        console.log(this.vez);
        return this.vez;
    }

    getNome(){
        return this.nome;
    }
}
 
let player1 = new Player('Player1');
let player2 = new Player('Player2');

player1.rolarDado();
player1.sortearPokemon(["Bulbassauro","Venossaur"]);
console.log(player1.getPokemon());


player2.rolarDado();
console.log(player2.getPokemon());
  
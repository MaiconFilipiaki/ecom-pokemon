import Pokemon from './pokemon';

export default class ListPokemon {
  private _pokemons: Pokemon[];

  constructor(pokemons: Pokemon[]) {
    this._pokemons = pokemons;
  }

  getPokemons() {
    return this._pokemons
  }

  addPokemon(pokemon: Pokemon) {
    const pokemonsHasNew = this._pokemons.find(
      (i) => i.getId() === pokemon.getId(),
    );
    if (pokemonsHasNew) {
      throw new Error('Pokemon already at array');
    }
    this._pokemons.push(pokemon);
  }
}

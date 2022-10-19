import ListPokemon from './models/listPokemon';
import PokemonRepository from './pokemon.repository';
import Pokemon from './models/pokemon';

export class UseCasePokemon {
  private repository: PokemonRepository;
  constructor(repository: PokemonRepository) {
    this.repository = repository;
  }

  async getAllPokemon(): Promise<ListPokemon> {
    return await this.repository.findAll();
  }

  async deleteAll() {
    await this.repository.deleteAll();
  }

  async getPokemonByName(name: string): Promise<Pokemon> {
    return await this.repository.getByName(name);
  }
}

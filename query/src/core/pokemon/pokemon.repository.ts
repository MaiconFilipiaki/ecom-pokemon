import ListPokemon from './models/listPokemon';
import Pokemon from './models/pokemon';

export default interface PokemonRepository {
  findAll(): Promise<ListPokemon>;
  deleteAll(): Promise<void>;
  getByName(name: string): Promise<Pokemon>;
}

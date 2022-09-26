import { Injectable } from '@nestjs/common';
import ListPokemon from '../../core/pokemon/models/listPokemon';
import { UseCasePokemon } from '../../core/pokemon/use-case-pokemon';
import { PokemonApiService } from '../../external/pokemon-api/pokemon-api.service';
import Pokemon from "../../core/pokemon/models/pokemon";

@Injectable()
export class PokemonService {
  private readonly pokemonUseCase: UseCasePokemon;
  constructor(private readonly pokemonApiService: PokemonApiService) {
    this.pokemonUseCase = new UseCasePokemon(pokemonApiService);
  }

  async getAllPokemon(): Promise<ListPokemon> {
    return await this.pokemonUseCase.getAllPokemon();
  }

  async getPokemonByName(name: string): Promise<Pokemon> {
    return await this.pokemonUseCase.getPokemonByName(name)
  }
}

import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { firstValueFrom, lastValueFrom, map, Observable } from 'rxjs';
import ListPokemon from '../../core/pokemon/models/listPokemon';
import Pokemon from '../../core/pokemon/models/pokemon';
import { Cache } from 'cache-manager';
import PokemonRepository from '../../core/pokemon/pokemon.repository';

interface cachePokemon {
  id: number;
  name: string;
  images: string[];
}

@Injectable()
export class PokemonApiService implements PokemonRepository {
  readonly SUFIX_API = 'https://pokeapi.co/api/v2';

  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  async findAll(): Promise<ListPokemon> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.SUFIX_API}/pokemon?limit=500&offset=0`),
    );
    const { data } = response;
    const getAllPokemon: Pokemon[] = await Promise.all(
      data.results.map(async (i) => {
        return await this.getByName(i.name);
      }),
    );
    const listPokemon = new ListPokemon(getAllPokemon);
    console.log(response, data, getAllPokemon);
    return listPokemon;
  }

  async getByName(name: string): Promise<Pokemon> {
    try {
      const valueFromCache: cachePokemon = await this.cacheManager.get(name);
      const pokemon = new Pokemon()
      if (!valueFromCache) {
        const response = await firstValueFrom(
          this.httpService.get(`${this.SUFIX_API}/pokemon/${name}`),
        );
        const { data } = response;
        const images: any = Object.values(data.sprites).filter(
          (i) => i !== null && typeof i === 'string',
        );
        pokemon.id = data.id;
        pokemon.name = data.name;
        pokemon.images = images
        await this.cacheManager.set(name, this.factoryInterfaceCachePokemon(pokemon))
      } else {
        pokemon.id = valueFromCache.id
        pokemon.name = valueFromCache.name
        pokemon.images = valueFromCache.images
      }
      return pokemon;
    } catch (err) {
      throw new Error(err)
    }
  }

  async deleteAll() {
    await this.cacheManager.reset()
  }

  private factoryInterfaceCachePokemon(pokemon: Pokemon): cachePokemon {
    return {
      id: pokemon.getId(),
      name: pokemon.getName(),
      images: pokemon.getImages(),
    }
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from "@nestjs/axios";
import { PokemonApiService } from './pokemon-api.service';

describe('PokemonApiService', () => {
  let service: PokemonApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        PokemonApiService,
      ],
      exports: [PokemonApiService],
    }).compile();

    service = await module.get<PokemonApiService>(PokemonApiService);
  });

  it('should be defined', () => {
    console.log(service);
    expect(service).toBeDefined();
  });

  it('get one pokemon by name', async () => {
    const namePokemon = 'ditto';

    const pokemonService = await service.getOnePokemon(namePokemon);

    expect(pokemonService.getName()).toBe(namePokemon);
  });

  it('get all pokemon', async () => {

    const listPokemon = await service.findAll();

    expect(listPokemon.getPokemons().length).toBeLessThan(1)
  })
});

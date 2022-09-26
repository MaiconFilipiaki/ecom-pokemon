import { Test, TestingModule } from '@nestjs/testing';
import { PokemonCacheService } from './pokemon-cache.service';

describe('PokemonCacheService', () => {
  let service: PokemonCacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonCacheService],
    }).compile();

    service = module.get<PokemonCacheService>(PokemonCacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

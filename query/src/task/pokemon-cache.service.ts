import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression, Timeout } from "@nestjs/schedule";
import { UseCasePokemon } from "../core/pokemon/use-case-pokemon";
import { PokemonApiService } from "../external/pokemon-api/pokemon-api.service";

@Injectable()
export class PokemonCacheService {
  private readonly logger = new Logger(PokemonCacheService.name)
  private readonly pokemonUseCase: UseCasePokemon;

  constructor(private readonly pokemonApiService: PokemonApiService) {
    this.pokemonUseCase = new UseCasePokemon(pokemonApiService);
  }

  // @Timeout(1000)
  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    try {
      this.logger.log('DELETE CACHE POKEMON LIST')
      await this.pokemonUseCase.deleteAll()
      this.logger.log('FINISH DELETE CACHE POKEMON LIST')
      this.logger.log('INIT CACHE POKEMON LIST')
      await this.pokemonUseCase.getAllPokemon();
      this.logger.log('FINISH CACHE POKEMON LIST')
    } catch (err) {
      this.logger.log('ERROR CACHE POKEMON LIST', err)
    }
  }
}

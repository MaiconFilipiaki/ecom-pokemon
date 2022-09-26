import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonApiModule } from './pokemon-api/pokemon-api.module';

@Module({
  imports: [PokemonApiModule],
  providers: [],
  exports: [PokemonApiModule],
})
export class ExternalModule {}

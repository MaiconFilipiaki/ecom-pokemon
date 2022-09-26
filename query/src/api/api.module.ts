import { ExternalModule } from './../external/external.module';
import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PokemonModule, ExternalModule],
  providers: [ExternalModule],
})
export class ApiModule {}

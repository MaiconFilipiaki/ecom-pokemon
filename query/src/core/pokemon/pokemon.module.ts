import { Module } from '@nestjs/common';
import { UseCasePokemon } from './use-case-pokemon';

@Module({
  providers: [UseCasePokemon],
})
export class PokemonModule {}

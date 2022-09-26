import { ExternalModule } from './../../external/external.module';
import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  controllers: [PokemonController],
  imports: [ExternalModule],
  providers: [PokemonService, ExternalModule],
})
export class PokemonModule {}

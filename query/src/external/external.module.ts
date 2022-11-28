import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonApiModule } from './pokemon-api/pokemon-api.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [PokemonApiModule, MongoModule],
  providers: [],
  exports: [PokemonApiModule, MongoModule],
})
export class ExternalModule {}

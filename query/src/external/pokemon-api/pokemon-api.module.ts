import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from "@nestjs/common";
import { PokemonApiService } from './pokemon-api.service';
import * as redisStore from "cache-manager-redis-store";

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      auth_pass: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
      ttl: 60 * 3600 * 1000,
    })
  ],
  providers: [PokemonApiService],
  exports: [PokemonApiService],
})
export class PokemonApiModule {}

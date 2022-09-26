import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PokemonCacheService } from "./pokemon-cache.service";
import { ExternalModule } from "../external/external.module";


@Module({
  imports: [
    ScheduleModule.forRoot(),
    ExternalModule,
  ],
  providers: [PokemonCacheService, ExternalModule]
})
export class TaskModule {}

import { Module } from '@nestjs/common';
import { ExternalModule } from './external/external.module';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ApiModule, ExternalModule, CoreModule]
})
export class AppModule {}

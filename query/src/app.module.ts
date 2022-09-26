import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ExternalModule } from './external/external.module';
import { CoreModule } from './core/core.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ApiModule, ExternalModule, CoreModule, TaskModule],
})
export class AppModule {}

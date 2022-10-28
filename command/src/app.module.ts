import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalModule } from './external/external.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ExternalModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ExternalModule } from '../../external/external.module';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';

@Module({
  imports: [ExternalModule],
  providers: [CheckoutService, ExternalModule],
  controllers: [CheckoutController]
})
export class CheckoutModule {}

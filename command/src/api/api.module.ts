import { Module } from '@nestjs/common';
import { ExternalModule } from '../external/external.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  providers: [ExternalModule],
  imports: [CheckoutModule, ExternalModule]
})
export class ApiModule {}

import { Module } from '@nestjs/common';
import { ExternalModule } from '../../external/external.module';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {ClientKafka, ClientProxyFactory, ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
      ExternalModule,
    ConfigModule,
    ClientsModule.register([
      {
        name: 'CHECKOUT_SERVICE_RA', transport: Transport.RMQ,
        options: {
          urls: [''],
          queue: 'checkout',
          queueOptions: {
            durable: false
          },
        },
      }
    ])
  ],
  providers: [
    CheckoutService,
    ExternalModule,

  ],
  controllers: [CheckoutController]
})
export class CheckoutModule {}

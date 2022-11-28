import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import { CheckoutService } from './checkout.service';
import {ExternalModule} from "../../external/external.module";

@Module({
  imports:[
    ExternalModule,
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
  controllers: [CheckoutController],
  providers: [CheckoutService, ExternalModule]
})
export class CheckoutModule {}

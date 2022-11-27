import { Module } from '@nestjs/common';
import { ExternalModule } from '../../external/external.module';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import {ClientKafka, ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
      ExternalModule,
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9094'],
          },
        },
      },
    ])
  ],
  providers: [
    CheckoutService,
    ExternalModule,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaService: ClientKafka) => {
        return kafkaService.connect();
      },
      inject: ['KAFKA_SERVICE'],
    }
  ],
  controllers: [CheckoutController]
})
export class CheckoutModule {}

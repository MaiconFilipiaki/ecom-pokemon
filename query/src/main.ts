import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [''],
      queue: 'checkout',
      queueOptions: {
        durable: false
      },
    }
  })
  await app.startAllMicroservices()
  const config = new DocumentBuilder()
    .setTitle('Api query ecommerce Pokemon')
    .setVersion('1.0')
    .addTag('pokeapi')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

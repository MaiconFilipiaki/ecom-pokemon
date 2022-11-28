import { Module } from '@nestjs/common';
import { CheckoutMongoService } from './checkout-mongo/checkout-mongo.service';
import {MongooseModule} from "@nestjs/mongoose";
import Checkout, {CheckoutSchema} from "../../core/checkout/models/checkout";

@Module({
  imports: [
    MongooseModule.forRoot(''),
      MongooseModule.forFeature([{name: Checkout.name, schema: CheckoutSchema}])
  ],
  providers: [
    CheckoutMongoService
  ],
  exports: [CheckoutMongoService]
})
export class MongoModule {}

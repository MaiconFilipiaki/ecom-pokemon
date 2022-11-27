import {Body, Controller, Inject, Post} from '@nestjs/common';
import Checkout from '../../core/checkout/models/checkout';
import { CheckoutService } from './checkout.service';
import {CreateCheckout} from './contracts/inputs/create-checkout';
import {Producer} from "@nestjs/microservices/external/kafka.interface";

@Controller('checkout')
export class CheckoutController {

    constructor(
        private readonly checkoutService: CheckoutService,
        @Inject("KAFKA_PRODUCER")
        private kafkaProducer: Producer
    ) {}

    @Post()
    createCheckout(@Body() createCheckout: CreateCheckout) {
        const checkout = this.checkoutService.createCheckout(CreateCheckout.ToEntity(createCheckout))
        this.kafkaProducer.send({
            topic: 'checkout',
            messages: [{key: 'checkout', value: JSON.stringify(checkout)}]
        })
        return checkout
    }

}

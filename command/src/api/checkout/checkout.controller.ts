import {Body, Controller, Inject, Post} from '@nestjs/common';
import Checkout from '../../core/checkout/models/checkout';
import { CheckoutService } from './checkout.service';
import {CreateCheckout} from './contracts/inputs/create-checkout';
import {Producer} from "@nestjs/microservices/external/kafka.interface";
import {ClientProxy, EventPattern} from '@nestjs/microservices';

@Controller('checkout')
export class CheckoutController {

    constructor(
        private readonly checkoutService: CheckoutService,
        @Inject('CHECKOUT_SERVICE_RA') private subscribersService: ClientProxy,
    ) {}

    @Post()
    async createCheckout(@Body() createCheckout: CreateCheckout) {
        const checkout = this.checkoutService.createCheckout(CreateCheckout.ToEntity(createCheckout))
        this.subscribersService.emit('add-checkout', JSON.stringify(createCheckout))
        return checkout
    }
}

import { Body, Controller, Post } from '@nestjs/common';
import Checkout from '../../core/checkout/models/checkout';
import { CheckoutService } from './checkout.service';
import CreateCheckout from './contracts/inputs/create-checkout';

@Controller('checkout')
export class CheckoutController {

    constructor(private readonly checkoutService: CheckoutService) {}

    @Post()
    createCheckout(@Body() createCheckout: CreateCheckout) {
        return this.checkoutService.createCheckout(createCheckout.convertToEntity())
    }

}

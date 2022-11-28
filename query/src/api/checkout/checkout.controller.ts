import {Controller, Get, HttpException, Param} from '@nestjs/common';
import {EventPattern} from "@nestjs/microservices";
import {CheckoutService} from "./checkout.service";
import Checkout from "../../core/checkout/models/checkout";
import {ApiParam} from "@nestjs/swagger";

@Controller('checkout')
export class CheckoutController {

    constructor(private readonly checkoutService: CheckoutService,) {
    }

    @EventPattern('add-checkout')
    async envCheckout(checkout: string) {
        const checkoutParse = JSON.parse(checkout)
        const saveCheckout = new Checkout(
            checkoutParse.email,
            checkoutParse.pokemonId,
            checkoutParse.street,
            checkoutParse.numberHome,
            checkoutParse.neighborhood
        )
        await this.checkoutService.createCheckout(saveCheckout)
    }

    @Get(':email')
    @ApiParam({
        name: 'email',
    })
    async findByEmail(@Param() params) {
        if (!params?.email) {
            return new HttpException("Email is required", 400)
        }
        return this.checkoutService.findyByEmail(params.email)
    }

}

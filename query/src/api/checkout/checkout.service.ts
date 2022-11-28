import { Injectable } from '@nestjs/common';
import {UseCaseCheckout} from "../../core/checkout/use-case-checkout";
import CheckoutRepository from "../../core/checkout/checkout.repository";
import Checkout from "../../core/checkout/models/checkout";
import {CheckoutMongoService} from "../../external/mongo/checkout-mongo/checkout-mongo.service";

@Injectable()
export class CheckoutService {

    private readonly checkoutUseCase: UseCaseCheckout;
    constructor(private readonly checkoutRepository: CheckoutMongoService) {
        this.checkoutUseCase = new UseCaseCheckout(checkoutRepository)
    }

    async createCheckout(checkout: Checkout): Promise<Checkout> {
        return await this.checkoutUseCase.create(checkout)
    }

    async findyByEmail(email: string): Promise<Checkout[]> {
        return this.checkoutUseCase.findByEmail(email)
    }

}

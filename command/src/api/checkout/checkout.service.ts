import { Injectable } from '@nestjs/common';
import CheckoutRepository from '../../core/checkout/checkout.repository';
import Checkout from '../../core/checkout/models/checkout';
import { UseCaseCheckout } from '../../core/checkout/use-case-checkout';
import { CheckoutPostgresService } from '../../external/postgresql/checkout-postgres/checkout-postgres.service';

@Injectable()
export class CheckoutService {

    private readonly checkoutUseCase: UseCaseCheckout;
    constructor(private readonly checkoutRepository: CheckoutPostgresService) {
        this.checkoutUseCase = new UseCaseCheckout(checkoutRepository)
    }

    async createCheckout(checkout: Checkout): Promise<Checkout> {
        return await this.checkoutUseCase.createCheckout(checkout)
    }

}

import CheckoutRepository from "./checkout.repository";
import Checkout from "./models/checkout";

export class UseCaseCheckout {
    private repository: CheckoutRepository;

    constructor(rep: CheckoutRepository) {
        this.repository = rep;
    }

    async createCheckout(checkout: Checkout): Promise<Checkout> {
        return await this.repository.create(checkout)
    }
}
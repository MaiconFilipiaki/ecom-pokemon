import Checkout from "./models/checkout";
import CheckoutRepository from "./checkout.repository";

export class UseCaseCheckout {
    private repository: CheckoutRepository;
    constructor(repository: CheckoutRepository) {
        this.repository = repository
    }

    async create(checkout: Checkout): Promise<Checkout> {
        return await this.repository.create(checkout)
    }

    async findByEmail(email: string): Promise<Checkout[]> {
        return await this.repository.findByEmail(email)
    }
}
import Checkout from "./models/checkout";

export default interface CheckoutRepository {
    create(checkout: Checkout): Promise<Checkout>
    findByEmail(email: string): Promise<Checkout[]>
}
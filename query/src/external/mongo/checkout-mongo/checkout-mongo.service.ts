import { Injectable } from '@nestjs/common';
import CheckoutRepository from "../../../core/checkout/checkout.repository";
import {InjectModel} from "@nestjs/mongoose";
import Checkout, {CheckoutDocument} from "../../../core/checkout/models/checkout";
import {Model} from "mongoose";

@Injectable()
export class CheckoutMongoService implements CheckoutRepository {
    constructor(
        @InjectModel(Checkout.name) private checkoutModel: Model<CheckoutDocument>
    ) {
    }

    create(checkout: Checkout): Promise<Checkout> {
        const createCheckout = new this.checkoutModel(checkout)
        return createCheckout.save()
    }

    findByEmail(email: string): Promise<Checkout[]> {
        return this.checkoutModel.find({
            email,
        }).exec();
    }
}

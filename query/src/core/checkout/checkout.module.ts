import { Module } from '@nestjs/common';
import {UseCaseCheckout} from "./use-case-checkout";

@Module({
    providers: [
        UseCaseCheckout
    ]
})
export class CheckoutModule {}

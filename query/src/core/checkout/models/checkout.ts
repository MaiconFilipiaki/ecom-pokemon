import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CheckoutDocument = HydratedDocument<Checkout>

@Schema()
export default class Checkout {

    @Prop()
    email: string

    @Prop()
    pokemonId: string

    @Prop()
    street: string

    @Prop()
    numberHome: string

    @Prop()
    neighborhood: string

    constructor(
        email: string,
        pokemonId: string,
        street: string,
        numberHome: string,
        neighborhood: string
    ) {
        this.email = email
        this.pokemonId = pokemonId
        this.street = street
        this.numberHome = numberHome
        this.neighborhood = neighborhood
    }
}

export const CheckoutSchema = SchemaFactory.createForClass(Checkout)
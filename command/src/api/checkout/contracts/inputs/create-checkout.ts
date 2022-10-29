import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"
import Checkout from "../../../../core/checkout/models/checkout"

export class CreateCheckout {

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    pokemonId: string

    @ApiProperty()
    @IsNotEmpty()
    street: string 

    @ApiProperty()
    @IsNotEmpty()
    numberHome: string

    @ApiProperty()
    @IsNotEmpty()
    neighborhood: string

    static ToEntity(create: CreateCheckout) {
        return new Checkout(
            create.email,
            create.pokemonId,
            create.street,
            create.numberHome,
            create.neighborhood
        )
    }
}
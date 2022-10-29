import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"
import Checkout from "../../../../core/checkout/models/checkout"

export default class CreateCheckout {

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

    convertToEntity() {
        return new Checkout(
            this.email,
            this.pokemonId,
            this.street,
            this.numberHome,
            this.neighborhood
        )
    }
}
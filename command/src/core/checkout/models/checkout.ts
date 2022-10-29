import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Checkout {
    
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email: string

    @Column()
    pokemonId: string

    @Column()
    street: string 

    @Column()
    numberHome: string

    @Column()
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
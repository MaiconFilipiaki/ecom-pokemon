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

}
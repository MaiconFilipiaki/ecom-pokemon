import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CheckoutRepository from '../../../core/checkout/checkout.repository';
import Checkout from '../../../core/checkout/models/checkout';
import checkout from '../../../core/checkout/models/checkout';

@Injectable()
export class CheckoutPostgresService implements CheckoutRepository {

    constructor(
        @InjectRepository(Checkout)
        private usersRepository: Repository<Checkout>
    ) { }

    async create(checkout: checkout): Promise<checkout> {
        return await this.usersRepository.create(checkout)
    }
}

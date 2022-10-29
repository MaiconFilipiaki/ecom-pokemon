import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Checkout from '../../core/checkout/models/checkout';
import { CheckoutPostgresService } from './checkout-postgres/checkout-postgres.service';

const reps = TypeOrmModule.forFeature([Checkout])

@Module({
  imports: [
    reps,
  ],
  providers: [CheckoutPostgresService],
  exports: [CheckoutPostgresService]
})
export class PostgresqlModule {}

import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [PokemonModule, CheckoutModule],
  exports: [PokemonModule, CheckoutModule],
})
export class CoreModule {}

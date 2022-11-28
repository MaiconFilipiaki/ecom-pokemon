import { ExternalModule } from './../external/external.module';
import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [PokemonModule, ExternalModule, CheckoutModule],
  providers: [ExternalModule],
})
export class ApiModule {}

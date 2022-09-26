import { PokemonService } from './pokemon.service';
import { Controller, Get, Param } from "@nestjs/common";
import { ApiParam } from "@nestjs/swagger";

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAllPokemon() {
    return this.pokemonService.getAllPokemon();
  }

  @Get(':name')
  @ApiParam({name: 'name', required: true, schema: { oneOf: [{type: 'string'}]}})
  getPokemonByName(@Param() params) {
    return this.pokemonService.getPokemonByName(params.name)
  }
}

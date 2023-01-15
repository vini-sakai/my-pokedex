import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { GetAllPokemonUseCase } from './get-all-pokemon.usecase';

@ApiTags('Pokemon')
@Controller('pokemons')
export class GetAllPokemonController {
  constructor(private readonly getAllPokemonUseCase: GetAllPokemonUseCase) {}

  @HttpCode(200)
  @Get('')
  @ApiOperation({ description: 'Retornar todos os pokemons' })
  async get(): Promise<any> {
    const pokemonOrError = await this.getAllPokemonUseCase.execute();

    return pokemonOrError;
  }
}

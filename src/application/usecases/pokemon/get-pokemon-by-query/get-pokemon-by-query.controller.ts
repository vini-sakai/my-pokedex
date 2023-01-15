import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetPokemonByQueryUsecase } from './get-pokemon-by-query.usecase';

@ApiTags('Pokemon')
@Controller('pokemons')
export class GetPokemonByQueryController {
  constructor(
    private readonly getPokemonByIdUsecase: GetPokemonByQueryUsecase,
  ) {}

  @HttpCode(200)
  @Get('')
  @ApiOperation({
    description: 'Retornar os pokemons filtrados pelos query params',
  })
  async getById(@Query() query: any): Promise<any> {
    const pokemonOrError = await this.getPokemonByIdUsecase.execute(query);

    return pokemonOrError;
  }
}

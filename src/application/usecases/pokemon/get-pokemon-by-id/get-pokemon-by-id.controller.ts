import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetPokemonByIdUsecase } from './get-pokemon-by-id.usecase';

@ApiTags('Pokemon')
@Controller('pokemons')
export class GetPokemonByIdController {
  constructor(private readonly getPokemonByIdUsecase: GetPokemonByIdUsecase) {}

  @HttpCode(200)
  @Get('/:pokemonId')
  @ApiOperation({ description: 'Retornar um pokemon' })
  async getById(@Param('pokemonId') _id: string): Promise<any> {
    const pokemonOrError = await this.getPokemonByIdUsecase.execute(_id);

    return pokemonOrError;
  }
}

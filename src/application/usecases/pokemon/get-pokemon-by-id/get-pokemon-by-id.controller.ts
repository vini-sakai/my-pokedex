import { Response } from '@core/utils/response';
import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPokemonByIdUsecase } from './get-pokemon-by-id.usecase';

@ApiTags('Pokemon')
@Controller('pokemons')
export class GetPokemonByIdController {
  constructor(private readonly getPokemonByIdUsecase: GetPokemonByIdUsecase) {}

  @HttpCode(200)
  @Get('/:pokemonId')
  async getById(@Param('pokemonId') _id: string): Promise<any> {
    const pokemonOrError = await this.getPokemonByIdUsecase.execute(_id);

    return Response.success(pokemonOrError, 'Successfully located product');
  }
}

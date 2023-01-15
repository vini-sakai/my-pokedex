import { Controller, Get, HttpCode } from '@nestjs/common';
import { Response } from '@core/utils/response';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { GetAllPokemonUseCase } from './get-all-pokemon.usecase';

@ApiTags('Pokemon')
@Controller('pokemons')
export class GetAllPokemonController {
  constructor(private readonly getAllPokemonUseCase: GetAllPokemonUseCase) {}

  @HttpCode(200)
  @Get('')
  @ApiOperation({ description: 'Retornar todas as rotas' })
  async get(): Promise<any> {
    const pokemonOrError = await this.getAllPokemonUseCase.execute();

    return Response.success(pokemonOrError, 'Listed all pokemons successfully');
  }
}

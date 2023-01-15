import { Controller, Delete, HttpCode, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeletePokemonUseCase } from './delete-pokemon.usecase';

@ApiTags('Pokemon')
@Controller('pokemons')
export class DeletePokemonController {
  constructor(private readonly deletePokemonUseCase: DeletePokemonUseCase) {}

  @HttpCode(200)
  @Delete('/:pokemonId')
  @ApiOperation({ description: 'Deleta um pokemon' })
  async delete(@Param('pokemonId') _id: string): Promise<any> {
    const deleteOrError = await this.deletePokemonUseCase.execute(_id);

    return deleteOrError;
  }
}

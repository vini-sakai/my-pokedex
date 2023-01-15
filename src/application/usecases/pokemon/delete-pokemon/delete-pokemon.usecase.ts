import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Either, right, left } from '@core/utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeletePokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(_id: string): Promise<any> {
    const pokemon = await this.pokemonRepo.findById(_id);

    pokemon.deactive();

    return await this.pokemonRepo.update(pokemon._id, pokemon);
  }
}

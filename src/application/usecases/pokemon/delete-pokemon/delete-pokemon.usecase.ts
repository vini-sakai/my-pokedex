import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeletePokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(_id: string): Promise<any> {
    const pokemon = await this.pokemonRepo.findById(_id);

    pokemon.deactive();

    await this.pokemonRepo.update(_id, pokemon);
    return { message: 'Pokemon deletes successfully' };
  }
}

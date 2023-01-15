import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPokemonByIdUsecase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(_id: string): Promise<any> {
    const pokemon = await this.pokemonRepo.findById(_id);

    return { message: 'successfully located pokemon!', value: pokemon };
  }
}

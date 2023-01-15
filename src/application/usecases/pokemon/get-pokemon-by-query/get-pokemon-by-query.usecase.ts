import { PokemonRepository } from '@application/repositories/pokemon.repository';

import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPokemonByQueryUsecase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(query: any): Promise<any> {
    const pokemon = await this.pokemonRepo.find(query);

    return { message: 'successfully located pokemon!', value: pokemon };
  }
}

import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Either, left, right } from '@core/utils';
import { Pokemon } from '@entities/pokemon.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPokemonByIdUsecase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(_id: string): Promise<Pokemon> {
    const pokemon = await this.pokemonRepo.findById(_id);

    return pokemon;
  }
}

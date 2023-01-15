import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Pokemon } from '@entities/pokemon.entity';

@Injectable()
export class UpdatePokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(_id: string, payload: Pokemon): Promise<any> {
    const pokemon = await this.pokemonRepo.findById(_id);

    const uptatedPokemon = new Pokemon({
      ...payload,
      _id,
    });

    await this.pokemonRepo.update(_id, uptatedPokemon);

    await this.pokemonRepo.create(pokemon);

    return pokemon;
  }
}

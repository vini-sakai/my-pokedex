import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Pokemon } from '@entities/pokemon.entity';

@Injectable()
export class UpdatePokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(_id: string, payload: Pokemon): Promise<any> {
    const pokemonExists = await this.pokemonRepo.find({
      _id: _id,
      active: true,
    });
    if (!pokemonExists.length) {
      return { message: 'Pokemon not exists or its inactive' };
    } else {
      const pokemon = await this.pokemonRepo.findById(_id);
      const updatedPokemon = new Pokemon({
        ...pokemon,
        ...payload,
        _id,
      });

      await this.pokemonRepo.update(_id, updatedPokemon);

      return { message: 'Pokemon updated successfully', value: updatedPokemon };
    }
  }
}

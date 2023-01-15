import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Pokemon } from '@entities/pokemon.entity';

@Injectable()
export class CreatePokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(payload: Pokemon): Promise<any> {
    const alreadyExists = await this.pokemonRepo.exists(payload.name);

    if (alreadyExists) {
      return { message: 'Pokemon already exists!' };
    } else {
      const pokemon = new Pokemon(payload);

      await this.pokemonRepo.create(pokemon);

      return { message: 'Pokemon created successfully', value: pokemon };
    }
  }
}

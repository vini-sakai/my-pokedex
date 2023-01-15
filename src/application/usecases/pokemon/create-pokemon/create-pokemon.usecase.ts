import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Pokemon } from '@entities/pokemon.entity';

@Injectable()
export class CreatePokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(payload: Pokemon): Promise<any> {
    const alreadyExists = await this.pokemonRepo.find({
      name: payload.name,
      active: false,
    });

    if (alreadyExists) return console.log('existe');

    const pokemon = new Pokemon(payload);

    await this.pokemonRepo.create(pokemon);

    return pokemon;
  }
}

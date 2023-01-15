import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Injectable } from '@nestjs/common';
import { Pokemon } from '@entities/pokemon.entity';

@Injectable()
export class GetAllPokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(): Promise<Pokemon[]> {
    const listPokemons = await this.pokemonRepo.findAll();

    return listPokemons;
  }
}

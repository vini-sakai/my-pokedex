import { PokemonRepository } from '@application/repositories/pokemon.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllPokemonUseCase {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async execute(): Promise<any> {
    const listPokemons = await this.pokemonRepo.findAll();

    return { message: 'Listed all pokemons successfully', value: listPokemons };
  }
}

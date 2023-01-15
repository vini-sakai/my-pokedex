import { Injectable } from '@nestjs/common';
import { PaprRepository } from './papr.repository';
import { MongoProvider } from '@infra/mongo/mongo.provider';
import { Pokemon } from '../../domain/entities/pokemon.entity';
import {
  PokemonDocument,
  pokemonSchema,
} from '@infra/mongo/schemas/pokemon.schema';
import { Model } from 'papr';

@Injectable()
export class PokemonRepository extends PaprRepository<
  Pokemon,
  PokemonDocument,
  Model<PokemonDocument, object>
> {
  constructor(private readonly mongoProvider: MongoProvider) {
    super(mongoProvider.papr.model('pokemons', pokemonSchema));
  }
  async findById(_id: string): Promise<Pokemon> {
    const result = await this.model.findOne({ _id });
    if (!result) return null as any;
    return this.toDomain(result);
  }
  async find(query: any): Promise<Pokemon> {
    const result = await this.model.find(query);
    return this.toDomain(result);
  }
  async findByName(name: string): Promise<any> {
    const result = await this.model.findOne({ name });
    if (!result) return null as any;
    return result;
  }

  toDomain(rawDocument: any): Pokemon {
    return new Pokemon(rawDocument);
  }

  toPersistence(object: Pokemon) {
    return {
      _id: object._id,
      name: object.name,
      supertype: object.supertype,
      subtypes: object.subtypes,
      hp: object.hp,
      types: object.types,
      evolvesFrom: object.evolvesFrom,
      evolvesTo: object.evolvesTo,
      rules: object.rules,
      ancientTrait: object.ancientTrait,
      abilities: object.abilities,
      attacks: object.attacks,
      weaknesses: object.weaknesses,
      resistances: object.resistances,
      retreatCost: object.retreatCost,
      convertedRetreatCost: object.convertedRetreatCost,
      flavorText: object.flavorText,
      active: object.active,
    };
  }
}

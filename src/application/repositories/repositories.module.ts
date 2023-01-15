import { MongoModule } from '@infra/mongo/mongo.module';
import { Module } from '@nestjs/common';
import { PokemonRepository } from './pokemon.repository';

@Module({
  imports: [MongoModule],
  providers: [PokemonRepository],
  exports: [PokemonRepository],
})
export class RepositoriesModule {}

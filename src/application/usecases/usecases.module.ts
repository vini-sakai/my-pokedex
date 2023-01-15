import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@repositories/repositories.module';
import { CreatePokemonController } from './pokemon/create-pokemon/create-pokemon.controller';
import { CreatePokemonUseCase } from './pokemon/create-pokemon/create-pokemon.usecase';
import { DeletePokemonController } from './pokemon/delete-pokemon/delete-pokemon.controller';
import { DeletePokemonUseCase } from './pokemon/delete-pokemon/delete-pokemon.usecase';
import { GetAllPokemonController } from './pokemon/get-all-pokemon/get-all-pokemon.controller';
import { GetAllPokemonUseCase } from './pokemon/get-all-pokemon/get-all-pokemon.usecase';
import { GetPokemonByIdController } from './pokemon/get-pokemon-by-id/get-pokemon-by-id.controller';
import { GetPokemonByIdUsecase } from './pokemon/get-pokemon-by-id/get-pokemon-by-id.usecase';
import { UpdatePokemonController } from './pokemon/update-pokemon/update-pokemon.controller';
import { UpdatePokemonUseCase } from './pokemon/update-pokemon/update-pokemon.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [
    CreatePokemonUseCase,
    GetAllPokemonUseCase,
    GetPokemonByIdUsecase,
    DeletePokemonUseCase,
    UpdatePokemonUseCase,
  ],
  controllers: [
    CreatePokemonController,
    GetAllPokemonController,
    GetPokemonByIdController,
    DeletePokemonController,
    UpdatePokemonController,
  ],
})
export class UseCasesModule {}

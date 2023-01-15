import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@repositories/repositories.module';

//POKEMON USECASES
import { CreatePokemonUseCase } from './pokemon/create-pokemon/create-pokemon.usecase';
import { DeletePokemonUseCase } from './pokemon/delete-pokemon/delete-pokemon.usecase';
import { GetAllPokemonUseCase } from './pokemon/get-all-pokemon/get-all-pokemon.usecase';
import { GetPokemonByIdUsecase } from './pokemon/get-pokemon-by-id/get-pokemon-by-id.usecase';
import { GetPokemonByQueryUsecase } from './pokemon/get-pokemon-by-query/get-pokemon-by-query.usecase';
import { UpdatePokemonUseCase } from './pokemon/update-pokemon/update-pokemon.usecase';

//POKEMON CONTROLLERS
import { CreatePokemonController } from './pokemon/create-pokemon/create-pokemon.controller';
import { DeletePokemonController } from './pokemon/delete-pokemon/delete-pokemon.controller';
import { GetAllPokemonController } from './pokemon/get-all-pokemon/get-all-pokemon.controller';
import { GetPokemonByIdController } from './pokemon/get-pokemon-by-id/get-pokemon-by-id.controller';
import { GetPokemonByQueryController } from './pokemon/get-pokemon-by-query/get-pokemon-by-query.controller';
import { UpdatePokemonController } from './pokemon/update-pokemon/update-pokemon.controller';

@Module({
  imports: [RepositoriesModule],
  providers: [
    CreatePokemonUseCase,
    GetPokemonByQueryUsecase,
    GetAllPokemonUseCase,
    GetPokemonByIdUsecase,
    DeletePokemonUseCase,
    UpdatePokemonUseCase,
  ],
  controllers: [
    CreatePokemonController,
    GetPokemonByQueryController,
    GetAllPokemonController,
    GetPokemonByIdController,
    DeletePokemonController,
    UpdatePokemonController,
  ],
})
export class UseCasesModule {}

import {
  Controller,
  Post,
  HttpCode,
  Body,
  UsePipes,
  Put,
  Param,
} from '@nestjs/common';
import * as Joi from 'joi';
import { UpdatePokemonUseCase } from './update-pokemon.usecase';
import { Response } from '@core/utils/response';
import { JoiValidationPipe } from '@core/validation-pipe/joi.validation-pipe';
import { ApiBody, ApiTags } from '@nestjs/swagger';

export const PokemonDTOSchema = Joi.object({
  name: Joi.string().required(),
  superType: Joi.string().required(),
  subTypes: Joi.string().required(),
  hp: Joi.string().optional(),
  types: Joi.array().optional(),
  evolvesFrom: Joi.string().optional(),
  evolvesTo: Joi.array().optional(),
  rules: Joi.array().optional(),
  ancientTrait: Joi.object().optional(),
  abilities: Joi.array().optional(),
  attacks: Joi.array().optional(),
  weaknesses: Joi.array().optional(),
  resistences: Joi.array().optional(),
  retreatCost: Joi.array().optional(),
  convertedRetreatCost: Joi.number().optional(),
  flavorText: Joi.string().optional(),
});

@ApiTags('Pokemon')
@Controller('pokemons')
export class UpdatePokemonController {
  constructor(private readonly createPokemonUseCase: UpdatePokemonUseCase) {}

  @HttpCode(200)
  @UsePipes(new JoiValidationPipe(PokemonDTOSchema))
  @Put('/:pokemonId')
  async update(@Param('pokemonId') _id: string, @Body() body): Promise<any> {
    const pokemonOrError = await this.createPokemonUseCase.execute(_id, body);

    return Response.success(pokemonOrError, 'Pokemon updated successfully');
  }
}

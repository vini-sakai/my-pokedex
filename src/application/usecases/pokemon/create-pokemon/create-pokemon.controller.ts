import { Controller, Post, HttpCode, Body, UsePipes } from '@nestjs/common';
import * as Joi from 'joi';
import { CreatePokemonUseCase } from './create-pokemon.usecase';
import { Response } from '@core/utils/response';
import { JoiValidationPipe } from '@core/validation-pipe/joi.validation-pipe';
import { ApiBody, ApiTags } from '@nestjs/swagger';

export const PokemonDTOSchema = Joi.object({
  name: Joi.string().required(),
  supertype: Joi.string().required(),
  subtypes: Joi.array().required(),
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
export class CreatePokemonController {
  constructor(private readonly createPokemonUseCase: CreatePokemonUseCase) {}

  @HttpCode(200)
  @UsePipes(new JoiValidationPipe(PokemonDTOSchema))
  @Post('/')
  async create(@Body() body): Promise<any> {
    const pokemonOrError = await this.createPokemonUseCase.execute(body);

    return Response.success(pokemonOrError, 'Pokemon created successfully');
  }
}

import {
  Controller,
  HttpCode,
  Body,
  UsePipes,
  Put,
  Param,
} from '@nestjs/common';
import * as Joi from 'joi';
import { UpdatePokemonUseCase } from './update-pokemon.usecase';
import { JoiValidationPipe } from '@core/validation-pipe/joi.validation-pipe';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PokemonDTO } from '../DTO/pokemonDTO.dto';

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
export class UpdatePokemonController {
  constructor(private readonly createPokemonUseCase: UpdatePokemonUseCase) {}

  @HttpCode(201)
  @UsePipes(new JoiValidationPipe(PokemonDTOSchema))
  @Put('/:pokemonId')
  @ApiBody({ type: PokemonDTO })
  @ApiOperation({ description: 'Modifica um pokemon' })
  async update(@Param('pokemonId') _id: string, @Body() body): Promise<any> {
    const pokemonOrError = await this.createPokemonUseCase.execute(_id, body);

    return pokemonOrError;
  }
}

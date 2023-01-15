import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { string } from 'joi';

export class PokemonDTO {
  @ApiProperty({
    description: 'Pokemon Name',
  })
  name: string;

  @ApiProperty({
    description:
      'The supertype of the card, such as Pokémon, Energy, or Trainer.',
  })
  supertype: string;

  @ApiProperty({
    description:
      'A list of subtypes, such as Basic, EX, Mega, Rapid Strike, etc.',
  })
  subtypes: string[];

  @ApiProperty({
    description: 'The hit points of the card.',
  })
  hp?: string;

  @ApiProperty({
    description:
      'The energy types for a card, such as Fire, Water, Grass, etc.',
  })
  types?: string[];

  @ApiProperty({
    description: 'Which Pokémon this card evolves from.',
  })
  evolvesFrom?: string;

  @ApiProperty({
    description:
      'Which Pokémon this card evolves to. Can be multiple, for example, Eevee.',
  })
  evolvesTo?: string[];

  @ApiProperty({
    description:
      'Any rules associated with the card. For example, VMAX rules, Mega rules, or various trainer rules.',
  })
  rules?: string[];

  @ApiProperty({
    description: 'The ancient trait for a given card.',
    default: [
      {
        name: 'The name of the ancient trait',
        text: 'The text value of the ancient trait',
      },
    ],
  })
  ancientTrait?: object[];

  @ApiProperty({
    description: 'One or more abilities for a given card.',
    default: [
      {
        name: 'The name of the ability',
        type: 'The text value of the ability',
        text: '	The type of the ability, such as Ability or Pokémon-Power',
      },
    ],
  })
  abilities?: object[];

  @ApiProperty({
    description: 'The ancient trait for a given card.',
    default: [
      {
        convertedEnergyCost:
          'The total cost of the attack. For example, if it costs 2 fire energy, the converted energy cost is simply 2.',
        cost: '	The cost of the attack represented by a list of energy types.',
        damage: 'The damage amount of the attack',
        name: 'The name of the attack',
        text: 'The text or description associated with the attack',
      },
    ],
  })
  attacks?: object[];

  @ApiProperty({
    description: 'One or more attacks for a given card.',
    default: [
      {
        type: 'The type of weakness, such as Fire or Water.',
        value: 'The value of the weakness',
      },
    ],
  })
  weaknesses?: object[];

  @ApiProperty({
    description: 'One or more resistances for a given card.',
    default: [
      {
        type: 'The type of resistance, such as Fire or Water.',
        value: 'The value of the resistance',
      },
    ],
  })
  resistences?: object[];

  @ApiProperty({
    description:
      'A list of costs it takes to retreat and return the card to your bench. Each cost is an energy type, such as Water or Fire.',
  })
  retreatCost?: string[];

  @ApiProperty({
    description:
      'The converted retreat cost for a card is the count of energy types found within the retreatCost field. For example, ["Fire", "Water"] has a converted retreat cost of 2.',
  })
  convertedRetreatCost?: number;

  @ApiProperty({
    description:
      'The flavor text of the card. This is the text that can be found on some Pokémon cards that is usually italicized near the bottom of the card.',
  })
  flavorText?: string;
}

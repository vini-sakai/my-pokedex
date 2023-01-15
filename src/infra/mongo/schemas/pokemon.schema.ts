import { types, schema } from 'papr';

export const pokemonSchema = schema({
  _id: types.string({ required: true, unique: true }),
  name: types.string({ required: true }),
  supertype: types.string({ required: true }),
  subtypes: types.array(types.string({ required: true }), { required: true }),
  hp: types.string({ required: false }),
  types: types.array(types.string({ required: true }), { required: false }),
  evolvesFrom: types.string({ required: false }),
  evolvesTo: types.array(types.string({ required: true }), { required: false }),
  rules: types.array(types.string({ required: true }), { required: false }),
  ancientTrait: types.array(
    types.object({
      name: types.string({ required: true }),
      text: types.string({ required: true }),
    }),
    { required: false },
  ),
  abilities: types.array(
    types.object({
      name: types.string({ required: true }),
      text: types.string({ required: true }),
      type: types.string({ required: true }),
    }),
    { required: false },
  ),
  attacks: types.array(
    types.object({
      convertedEnergyCost: types.number({ required: true }),
      cost: types.array(types.string({ required: true }), { required: true }),
      damage: types.string({ required: true }),
      name: types.string({ required: true }),
      text: types.string({ required: true }),
    }),
    { required: false },
  ),

  weaknesses: types.array(
    types.object({
      type: types.string({ required: true }),
      value: types.string({ required: true }),
    }),
    { required: false },
  ),
  resistances: types.array(
    types.object({
      type: types.string({ required: true }),
      value: types.string({ required: true }),
    }),
    { required: false },
  ),
  retreatCost: types.array(types.string({ required: true }), {
    required: false,
  }),
  convertedRetreatCost: types.number({ required: false }),
  flavorText: types.string({ required: false }),
  active: types.boolean({ required: true }),
});
export type PokemonDocument = typeof pokemonSchema[0];

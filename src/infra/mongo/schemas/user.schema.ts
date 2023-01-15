import { types, schema } from 'papr';

export const userSchema = schema({
  _id: types.string({
    required: true,
    unique: true,
  }),
  age: types.number({ required: true }),
  firstName: types.string({ required: true }),
  lastName: types.string({ required: true }),
});

export type UserDocument = typeof userSchema[0];

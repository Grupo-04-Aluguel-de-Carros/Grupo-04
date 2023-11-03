import { object, string } from 'zod';

export const createStoreSchema = object({
  body: object({
    name: string()
      .trim()
      .min(2, { message: 'O campo nome deve ter ao menos 2 caracteres' }),
    brands: string().array().nonempty(),
  }),
});

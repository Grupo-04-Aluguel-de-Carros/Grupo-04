import { object, string } from 'zod';

export const updateStoreSchema = object({
  body: object({
    name: string()
      .trim()
      .min(2, { message: 'O campo nome deve ter ao menos 2 caracteres' })
      .optional(),
    brands: string().array().nonempty().optional(),
  }),
  params: object({
    id: string(),
  }),
});

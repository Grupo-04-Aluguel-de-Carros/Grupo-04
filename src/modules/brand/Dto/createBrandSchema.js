import { object, string } from 'zod';

export const createBrandSchema = object({
  body: object({
    name: string({
      required_error: 'Nome da marca é obrigatório',
    }).trim(),
  }),
});

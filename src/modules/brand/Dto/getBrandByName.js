import { string, object } from 'zod';

export const getBrandByName = object({
  query: object({
    name: string({
      required_error: 'Nome da marca é obrigatório',
    })
      .min(3)
      .trim(),
  }),
});

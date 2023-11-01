import { object, string } from 'zod';

export const createCategorySchema = object({
  body: object({
    name: string({
      required_error: 'Campo name é necessário',
    })
      .min(3, 'Necessário pelo menos 3 caracteres')
      .trim()
      .toUpperCase(),
    description: string({
      required_error: 'Campo description é necessário',
    })
      .min(10, 'Uma descrição é necessário ter no minimo 10 caracteres')
      .trim(),
  }),
});

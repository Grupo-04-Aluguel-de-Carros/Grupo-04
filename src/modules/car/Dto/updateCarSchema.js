import { object, string } from 'zod';

export const updateCarSchema = object({
  body: object({
    name: string()
      .trim()
      .min(1, { message: 'O nome deve ter ao menos 1 caractere' })
      .optional(),
    color: string()
      .trim()
      .min(1, { message: 'A cor deve ter ao menos 1 caractere' })
      .optional(),
    imageUrl: string()
      .trim()
      .min(1, { message: 'A imageUrl deve ter ao menos 1 caractere' })
      .optional(),
    storeId: string()
      .trim()
      .min(1, { message: 'O id da loja é umm campo obrigatório' })
      .optional(),
    categoryId: string()
      .trim()
      .min(1, { message: 'O id da categoria é umm campo obrigatório' })
      .optional(),
    brandId: string()
      .trim()
      .min(1, { message: 'O id da marca é umm campo obrigatório' })
      .optional(),
  }),
});

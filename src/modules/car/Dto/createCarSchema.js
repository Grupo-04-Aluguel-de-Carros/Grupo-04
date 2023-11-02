import { object, string } from 'zod';

export const createCarSchema = object({
  body: object({
    name: string()
      .trim()
      .min(1, { message: 'O nome deve ter ao menos 1 caractere' }),
    color: string()
      .trim()
      .min(1, { message: 'A cor deve ter ao menos 1 caractere' }),
    imageUrl: string()
      .trim()
      .min(1, { message: 'A imageUrl deve ter ao menos 1 caractere' }),
    storeId: string()
      .trim()
      .min(1, { message: 'O id da loja é umm campo obrigatório' }),
    brandId: string()
      .trim()
      .min(1, { message: 'O id da marca é umm campo obrigatório' }),
  }),
});

import { boolean, number, object, string } from 'zod';
import { onlyNumbersRegex } from '../../../utils/index.js';

export const createCarSchema = object({
  body: object({
    name: string()
      .trim()
      .min(1, { message: 'O nome deve ter ao menos 1 caractere' }),
    color: string()
      .trim()
      .min(1, { message: 'A cor deve ter ao menos 1 caractere' }),
    storeId: string()
      .trim()
      .min(1, { message: 'O id da loja é umm campo obrigatório' }),
    brandId: string()
      .trim()
      .min(1, { message: 'O id da marca é umm campo obrigatório' }),
    available: boolean(),
    model: string()
      .trim()
      .min(1, { message: 'O modelo é um campo obrigatório' }),
    value: number({ invalid_type_error: 'Adicione as casas decimais' }),
    year: string()
      .trim()
      .regex(onlyNumbersRegex, { message: 'Campo inválido' }),
    description: string().trim().min(10, {
      message: 'O campo de descrição precisa de ao menos 10 caracteres',
    }),
  }),
});

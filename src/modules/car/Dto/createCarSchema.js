import { boolean, number, object, string } from 'zod';
import { onlyNumbersRegex } from '../../../utils/index.js';

export const createCarSchema = object({
  body: object({
    name: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(2, { message: 'O nome deve ter ao menos 2 caracteres' }),
    color: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(1, { message: 'A cor deve ter ao menos 1 caractere' }),
    storeId: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(1, { message: 'O id da loja é umm campo obrigatório' }),
    brandId: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(1, { message: 'O id da marca é umm campo obrigatório' }),
    available: boolean({ required_error: 'Campo obrigatório' }),
    model: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(1, { message: 'O modelo é um campo obrigatório' }),
    value: number({ required_error: 'Campo obrigatório' }),
    year: string({ required_error: 'Campo obrigatório' })
      .trim()
      .regex(onlyNumbersRegex, { message: 'Campo inválido' }),
    description: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(10, {
        message: 'O campo de descrição precisa de ao menos 10 caracteres',
      }),
  }),
});

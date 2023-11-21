import { boolean, number, object, string } from 'zod';
import { onlyNumbersRegex } from '../../../utils';

export const updateCarSchema = object({
  body: object({
    name: string()
      .trim()
      .min(2, { message: 'O nome deve ter ao menos 2 caracteres' })
      .optional(),
    color: string()
      .trim()
      .min(1, { message: 'A cor deve ter ao menos 1 caractere' })
      .optional(),
    storeId: string()
      .trim()
      .min(1, { message: 'O id da loja é umm campo obrigatório' })
      .optional(),
    brandId: string()
      .trim()
      .min(1, { message: 'O id da marca é umm campo obrigatório' })
      .optional(),
    available: boolean({ required_error: 'Campo obrigatório' }),
    model: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(1, { message: 'O modelo é um campo obrigatório' })
      .optional(),
    value: number({ required_error: 'Campo obrigatório' }).optional(),
    year: string({ required_error: 'Campo obrigatório' })
      .trim()
      .regex(onlyNumbersRegex, { message: 'Campo inválido' })
      .optional(),
    description: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(10, {
        message: 'O campo de descrição precisa de ao menos 10 caracteres',
      })
      .optional(),
  }),
  params: object({
    id: string(),
  }),
});
